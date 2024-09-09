# Harmony - Mood Enhancer Website
## Project Overview
Harmony is a mood enhancer website designed to help users manage their mental health by detecting their emotions and suggesting binaural beats playlists. The project aims to assist individuals in improving their mental well-being, especially during challenging times like the COVID-19 pandemic.

## Motivation
The project was inspired by the personal experiences of the developers and their close friends during the pandemic, where they faced depressive episodes and lacked proper support. Harmony aims to provide an accessible tool to help users manage their emotions, reduce stress, and enhance their focus and relaxation through scientifically-backed binaural beats.

## Features
- **Emotion Detection:** Users can get their emotions detected through live camera feed input using Convolutional Neural Network (CNN) and Haar Cascade algorithms.
- **Binaural Beats Suggestion: **Based on the detected emotion, users are provided with a playlist of binaural beats that can help them calm their mind and enhance their mood.
- **User-Friendly Interface:** Simple and intuitive design allowing users to navigate through different features easily.
## Technical Details
### Data Corpus
**FER-2013 Dataset:** The project uses the FER-2013 dataset, consisting of 48x48 pixel grayscale images of faces categorized into seven emotions: Angry, Disgust, Fear, Happy, Sad, Surprise, and Neutral.
**Custom Dataset:** Additional images were collected and processed to enhance the model's performance.
**Algorithms Used**
**Convolutional Neural Network (CNN):** Used for feature extraction and classification of emotions.
**Haar Cascade:** Applied for face detection within images.
**Binaural Beats:** Utilized to align brain waves with specific frequencies, aiding in stress relief, focus, relaxation, and cognitive enhancement.

## Setup Instructions

To get the Harmony project up and running on your local machine, follow these steps:

### 1. Clone the Repository
- Open your terminal or command prompt.
- Run the following command to clone the repository:
    ```bash
    git clone https://github.com/your-username/harmony.git
    ```

### 2. Navigate to the Project Directory
- Change into the project directory by running:
    ```bash
    cd harmony
    ```

### 3. Install Dependencies
- Ensure you have Python and pip installed.
- Install the required dependencies by running:
    ```bash
    pip install -r requirements.txt
    ```

### 4. Run the Application
- Start the application using the command:
    ```bash
    python app.py
    ```

### 5. Access the Application
- Open your web browser and go to:
    ```
    http://localhost:5000
    ```
- You should now be able to use the Harmony website on your local machine.

## Usage
1. Launch the application and navigate to the homepage.
1. Choose to detect your current mood or manually select an emotion to receive binaural beats suggestions.
1. Listen to the suggested playlist on YouTube to help improve your mood.

## Results
The trained model shows approximately 60% accuracy in detecting emotions, which is considered competitive in the field. The application successfully provides users with mood-enhancing binaural beats based on the detected emotion.

# Future Enhancements
- **Chatbot Integration:** Plan to include a chatbot feature for users to have conversations and receive real-time assistance.
- **Therapist Integration:** Potential for therapists to join the platform, offering more personalized support to users.
- **Improved Accuracy:** Continuous improvements in the model to increase emotion detection accuracy.

## Conclusion
Harmony is a step towards improving mental health accessibility and awareness. By providing an easy-to-use platform, it encourages users to manage their mental well-being proactively.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

Authors
Shivam Patel - Master of Computer Science @ Stevens Institute of Technology
Dwij Siyal - Master of Data Science @ University of Regina
Arya Shah - Master of Computer Science @ Stevens Institute of Technology
Guided By: Prof. Vaibhav Gandhi Professor at Navrachana University
