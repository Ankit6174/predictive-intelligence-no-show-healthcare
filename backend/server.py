import numpy as np
from flask import Flask, request, jsonify
import pickle

app = Flask(__name__)

model = pickle.load(open('../load-models/model.pkl', 'rb'))

scaler = pickle.load(open('../load-models/scaler.pkl', 'rb'))

def load_encoder():
    encoder = pickle.load(open('../load-models/encoder.pkl', 'rb'))
    return encoder

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
    return "this is home!"

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
    app.run(debug=True)
