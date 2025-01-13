import joblib

import os
from feature_extraction import extract_features

# Load the model once at the start to improve performance
model = joblib.load('server/personality_model.pkl')

def predict_personality(image_path):
    if not os.path.exists(image_path):
        raise FileNotFoundError(f"File not found: {image_path}")
    features = extract_features(image_path)
    prediction = model.predict([list(features.values())])
    return {
        "Openness": prediction[0][0],
        "Conscientiousness": prediction[0][1],
        "Extraversion": prediction[0][2],
        "Agreeableness": prediction[0][3],
        "Neuroticism": prediction[0][4],
    }
