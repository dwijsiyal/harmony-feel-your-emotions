from flask import Flask, render_template, Response, redirect
import cv2
import numpy as np
from tensorflow.keras.models import model_from_json
from tensorflow.keras.preprocessing import image
import time

app = Flask(__name__)

@app.route('/')
def index():
    response = redirect("http://localhost:3000/admin/Suggestions?emotion=happy")
    return response

if __name__ == '__main__':
    app.run()