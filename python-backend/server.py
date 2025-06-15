import numpy as np
from flask import Flask, request, jsonify
from huggingface_hub import hf_hub_download
import pickle
import os
import joblib
import shutil

app = Flask(__name__)


REPO_ID = "ankitt6174/no-show-model"
FILENAME = "model.joblib"
LOCAL_PATH = os.path.join(os.path.dirname(__file__), "models", "model.joblib")

def download_model():
    if not os.path.exists(LOCAL_PATH):
        print("Model not found locally. Downloading from Hugging Face...")
        downloaded_path = hf_hub_download(repo_id=REPO_ID, filename=FILENAME)
        os.makedirs(os.path.dirname(LOCAL_PATH), exist_ok=True)
        shutil.copyfile(downloaded_path, LOCAL_PATH)
        print("Model downloaded and saved locally.")
    else:
        print("Model already exists locally.")

def load_model():
    with open(LOCAL_PATH, "rb") as f:
        model = joblib.load(f)
    return mode

download_model()
model = load_model()

with open("./models/scaler.pkl", 'rb') as file:
    scaler = pickle.load(file)
print("Scaler loaded succesfully: ")

def load_encoder():
    with open("./models/encoder.pkl", 'rb') as file:
        encoder = pickle.load(file)
    print("encoder loaded succesfully: ")
    return encoder

load_encoder()

def load_data(data):
    gender = 1 if data['Gender'] == 'Male' else 0
    age = data['Age']

    encoder = load_encoder()
    neighbourhood = encoder.transform([data['Neighbourhood']])[0]
    
    scholarship = 1 if data['Scholarship'] == 'Yes' else 0
    hipertension = 1 if data['Hipertension'] == 'Yes' else 0
    diabetes = 1 if data['Diabetes'] == 'Yes' else 0
    alcoholism = 1 if data['Alcoholism'] == 'Yes' else 0
    handcap = 1 if data['Handcap'] == 'Yes' else 0
    smsreceived = 1 if data['SMSreceived'] == "Yes" else 0
    waitingtime = data['WaitingTime']
    appointmentDayWeek = data['AppointmentDayOfWeek']

    lst = ['SameDay', 'Short', 'Mid', 'Long', 'VeryLong']
    waitingGroup = lst.index(data['WaitingGroup'])

    cronic_count = hipertension + diabetes + alcoholism
    chronicGroup = 0
    if cronic_count >= -1 or cronic_count < 0:
        chronicGroup = 0
    elif cronic_count == 0 or cronic_count <= 1:
        chronicGroup = 1
    elif cronic_count > 1 or cronic_count <=3:
        chronicGroup = 2

    return np.array([gender, 
                    age, 
                    neighbourhood, 
                    scholarship, 
                    hipertension, 
                    diabetes, 
                    alcoholism, 
                    handcap, 
                    smsreceived, 
                    waitingtime, 
                    appointmentDayWeek,
                    waitingGroup,
                    chronicGroup])

@app.route("/", methods=['GET'])
def home():
    return "This is an API for prediction."

@app.route('/datareceive', methods=['POST'])
def receive_data():
    data = request.get_json()
    
    raw_data = load_data(data)
    scaled_data = scaler.transform(raw_data.reshape(1, -1))

    prediction = model.predict(scaled_data)
    print("-"*50)
    print(prediction)
    print("-"*50)

    response = {"message": "Data received successfully!", "prediction": "Patient Will No-Show" if int(prediction[0]) == 1 else "Patient Will Show"}
    return jsonify(response)

if __name__ == '__main__':
    app.run(port=5000, debug=True)