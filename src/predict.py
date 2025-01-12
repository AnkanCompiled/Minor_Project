import joblib
from feature_extraction import extract_features

def predict_personality(image_path):
    model = joblib.load('personality_model.pkl')
    features = extract_features(image_path)
    prediction = model.predict([list(features.values())])
    return {
        "Openness": prediction[0][0],
        "Conscientiousness": prediction[0][1],
        "Extraversion": prediction[0][2],
        "Agreeableness": prediction[0][3],
        "Neuroticism": prediction[0][4],
    }

# Example usage
image_path = 'data/images/sample1.jpg'
print(predict_personality(image_path))
