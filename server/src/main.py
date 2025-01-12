from flask import Flask, request, jsonify
from flask_cors import CORS
from predict import predict_personality

app = Flask(__name__)

CORS(app)

@app.route('/predict', methods=['POST'])
def predict():
    # Get the image path from the request JSON
    data = request.get_json()
    image_path = data.get('image_path')
    
    if not image_path:
        return jsonify({"error": "image_path is required"}), 400
    
    try:
        result = predict_personality(image_path)
        return jsonify(result)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
