from flask import Flask, render_template, Response, redirect, make_response, after_this_request
import cv2
import numpy as np
from tensorflow.keras.models import model_from_json  
from tensorflow.keras.preprocessing import image
import time
  

#load model  
model = model_from_json(open("fer.json", "r").read())  

#load weights  
model.load_weights('fer.h5')


face_haar_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')  
emotion = "happy"
starttime = 0
emoji_dist = {0: "emojis/angry.png", 1: "emojis/disgusted.png", 2: "emojis/fearful.png", 3: "emojis/happy.png",
              4: "emojis/sad.png", 5: "emojis/surpriced.png", 6: "emojis/neutral.png"}
app = Flask(__name__)
camera = cv2.VideoCapture(0)
# generate frame by frame from camera
def gen_frames():
    #emotions = {0: "Angry", 1: "Disgusted", 2: "Fearful", 3: "Happy", 4: "Neutral", 5: "Sad", 6: "Surprised"}
    emoji_dist = {0: "emojis/angry.png", 1: "emojis/disgusted.png", 2: "emojis/fearful.png", 3: "emojis/happy.png",
                  4:  "emojis/sad.png", 5: "emojis/surpriced.png", 6: "emojis/neutral.png"}
    alpha = 0
    while True:
        # Capture frame by frame
        success, frame = camera.read()
        if not success:
            break
        else:
            gray_img= cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

            faces_detected = face_haar_cascade.detectMultiScale(gray_img, 1.32, 5)



            for (x,y,w,h) in faces_detected:
                global starttime
                cv2.rectangle(frame,(x,y),(x+w,y+h),(255,0,0),thickness=5)
                roi_gray=gray_img[y:y+w,x:x+h]          #cropping region of interest i.e. face area from  image
                roi_gray=cv2.resize(roi_gray,(48,48))
                img_pixels = image.img_to_array(roi_gray)
                img_pixels = np.expand_dims(img_pixels, axis = 0)
                img_pixels /= 255



                predictions = model.predict(img_pixels)

                #find max indexed array

                max_index = np.argmax(predictions[0])

                emotions = ['Angry', 'Disgust', 'Fear', 'Happy', 'Sad', 'Surprise', 'Neutral']
                predicted_emotion = emotions[max_index]
                img = cv2.imread(emoji_dist[max_index])
                foreground = img


                global emotion
                emotion = emotions[max_index]

                added_image = cv2.addWeighted(frame[0:150, 0:150, :], alpha, foreground[0:150, 0:150, :], 1 - alpha,
                                              0)  # to overlay image on the opencv videocapture
                frame[0:150, 0:150] = added_image

                #cv2.putText(frame, predicted_emotion, (int(x), int(y)), cv2.FONT_HERSHEY_SIMPLEX, 1, (0,0,255), 2)
                cv2.putText(frame, emotions[max_index], (10, 180), cv2.FONT_HERSHEY_DUPLEX, 1, (255, 255, 255), 2,
                            cv2.LINE_AA)  # to put text on videocapture

            resized_img = cv2.resize(frame, (1000, 700))

            ret, buffer = cv2.imencode('.jpg', frame)

            frame = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')  # concat frame one by one and show result



@app.route('/video_feed')
def video_feed():
    global starttime
    global emotion
    starttime = time.time()
    return Response(gen_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

@app.route('/')
def index():
    global starttime


    return render_template('index.html')


# def delayRedirect():
#     global emotion
#     @after_this_request
#     def index(self):
#         return render_template('index.html')
#     time.sleep(6)
#     #print(emotion)
#     response = redirect("http://localhost:3000/admin/Suggestions?emotion=")
#     return response

if __name__ == '__main__':
    app.run(debug=True)
