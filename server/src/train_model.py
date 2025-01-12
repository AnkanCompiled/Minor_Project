import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error
from feature_extraction import extract_features

# Load dataset
data = pd.read_csv('server/data/labels.csv')
X = []
y = []

# Extract features
for idx, row in data.iterrows():
    features = extract_features(f"data/images/{row['filename']}")
    X.append(list(features.values()))
    y.append(row[['openness', 'conscientiousness', 'extraversion', 'agreeableness', 'neuroticism']].values)

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train model
model = RandomForestRegressor()
model.fit(X_train, y_train)

# Evaluate
y_pred = model.predict(X_test)
print("Mean Squared Error:", mean_squared_error(y_test, y_pred))

# Save the model
import joblib
joblib.dump(model, 'personality_model.pkl')
