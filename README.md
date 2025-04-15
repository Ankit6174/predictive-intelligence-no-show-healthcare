![image](https://github.com/user-attachments/assets/a2175b7e-aa1f-40ed-a3d6-a07bba2f667e)

# Problem Statement:

Every day, hospitals face a serious challenge: patients book appointments but don't show up, without any notice. These missed appointments — called “no-shows” — waste doctors’ valuable time, increase operational costs, and delay treatment for other patients who genuinely need care. 

# Solution:

This project aims to develop a machine learning-based predictive system that helps hospitals identify in advance which patients are likely to miss their appointments. By analyzing historical appointment data and patient behavior, the system can assist hospital staff in making data-driven decisions, such as sending follow-up reminders, reallocating time slots, or even flagging high-risk cases — ultimately leading to better healthcare efficiency and reduced patient wait times.

# How To Clone

    https://github.com/Ankit6174/predictive-intelligence-no-show-healthcare.git

# Model Building
- Best Model 

      Random Forest Classifier:

        Test Accuracy of the Best Model: 0.7882775908701102

        Classification Report of the Best Model:
                      precision    recall  f1-score   support

                   0       0.82      0.80      0.81     16900
                   1       0.75      0.78      0.76     13418

            accuracy                           0.79     30318
           macro avg       0.79      0.79      0.79     30318
        weighted avg       0.79      0.79      0.79     30318

## Model Performance Comparison

| Model                       | Test Accuracy | Precision (0) | Recall (0) | F1-Score (0) | Precision (1) | Recall (1) | F1-Score (1) |
|-----------------------------|---------------|---------------|------------|--------------|---------------|------------|--------------|
| Logistic Regression         | 0.68          | 0.70          | 0.75       | 0.73         | 0.66          | 0.60       | 0.63         |
| Decision Tree               | 0.76          | 0.79          | 0.76       | 0.78         | 0.71          | 0.75       | 0.73         |
| K Nearest Neighbour         | 0.76          | 0.80          | 0.77       | 0.78         | 0.72          | 0.75       | 0.74         |
| Bernoulli Naive Bayes       | 0.67          | 0.70          | 0.71       | 0.71         | 0.63          | 0.62       | 0.63         |
| Random Forest               | 0.79          | 0.82          | 0.80       | 0.81         | 0.75          | 0.78       | 0.76         |
| Balanced Random Forest      | 0.78          | 0.83          | 0.77       | 0.80         | 0.73          | 0.81       | 0.77         |
| AdaBoost                    | 0.70          | 0.75          | 0.71       | 0.73         | 0.66          | 0.70       | 0.68         |
| Gradient Boosting           | 0.76          | 0.80          | 0.77       | 0.78         | 0.72          | 0.75       | 0.74         |
| LightGBM                    | 0.71          | 0.74          | 0.73       | 0.74         | 0.67          | 0.68       | 0.68         |
| Stacking                    | 0.78          | 0.80          | 0.81       | 0.81         | 0.76          | 0.75       | 0.75         |

**Observations:**

* The **Random Forest Classifier** achieved the highest test accuracy (0.79) among the evaluated models.
* The **Balanced Random Forest** and **Stacking Classifier** also demonstrated strong performance with test accuracies around 0.78.
* The **Decision Tree** and **K Nearest Neighbour** classifiers showed comparable performance with an accuracy of 0.76.
* **Logistic Regression** and **Bernoulli Naive Bayes** had the lowest test accuracies.

For a more detailed breakdown of each model's performance, please refer to the individual sections below.

# Prediction

- ## Run this file:  (*prediction.py*)

        python prediction.py

## Acknowledgement

Dataset from Kaggle - [No-show appointments](https://www.kaggle.com/datasets/joniarroba/noshowappointments) 

Image Banner Of GitHub - [Image Link](https://github.com/user-attachments/assets/a2175b7e-aa1f-40ed-a3d6-a07bba2f667e)

## Author

**Ankit Ahirwar** 
 
Feel free to connect on [GitHub](https://github.com/Ankit6174) or [LinkedIn](https://linkedin.com/Ankit6174)!