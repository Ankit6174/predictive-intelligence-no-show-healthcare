import pandas as pd
import pickle

data = pd.read_csv(r"./data/processed/processed-data.csv")
print("Data loaded succesfully: ")

with open("./load-models/model.pkl", 'rb') as file:
    model = pickle.load(file)
print("Model loaded succesfully: ")

with open("./load-models/scaler.pkl", 'rb') as file:
    scaler = pickle.load(file)
print("Scaler loaded succesfully: ")

x = data.drop('No-show', axis=1)
y = data['No-show']

xscaled = scaler.transform(x.iloc[300].values.reshape(1, -1))

prediction = model.predict(xscaled)

print("Patient Will No-show" if prediction==1 else "Patient Will Show")