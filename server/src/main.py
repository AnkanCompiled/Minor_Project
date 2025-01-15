from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import time
from predict import predict_personality

app = Flask(__name__)

CORS(app)

# Create an "uploads" folder if it doesn't exist
if not os.path.exists('server/data/uploads'):
    os.makedirs('server/data/uploads')

@app.route('/upload', methods=['POST'])

def upload_file():
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400

    file = request.files['file']  
    print(file.filename)
    if file.filename == '': 
        return jsonify({"error": "No selected file"}), 400

    timestamp = str(int(time.time()))
    filename = timestamp + "_" + file.filename  

    upload_folder = os.path.join('server/data/uploads')
    os.makedirs(upload_folder, exist_ok=True)
    file_path = os.path.join(upload_folder, filename)
    file.save(file_path) 

    return jsonify({"message": "File uploaded successfully", "file_path": file_path}), 200


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
