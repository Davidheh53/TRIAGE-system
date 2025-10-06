from flask import Flask, request, jsonify
import tensorflow as tf
import numpy as np

app = Flask(__name__)
model = tf.keras.models.load_model('path/to/my_trained_model.keras')

@app.route('/api/predict-triage', methods=['POST'])
def predict():
    data = request.json
    # Prepare input as numpy array, e.g.:
    input_data = np.array([[data['symptom1'], data['symptom2'], data['symptom3']]])
    prediction = model.predict(input_data)
    return jsonify({'result': float(prediction[0][0])})

if __name__ == '__main__':
    app.run(port=5001)