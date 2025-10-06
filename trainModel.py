import tensorflow as tf
from tensorflow.keras.models import Sequential 
from tensorflow.keras.layers import Dense
from tensorflow.keras.optimizers import Adam 
import numpy as np
import os
import re

# Load your dataset
# Replace this with your actual data loading logic
def load_data():
    symptoms = np.array([
        [1, 2, 3], [4, 5, 6], [7, 8, 9],
        [2, 3, 4], [5, 6, 7], [8, 9, 1]
    ])
    labels = np.array([0, 1, 0, 1, 0, 1])
    return symptoms, labels

# Preprocess your data
def preprocess_data(symptoms, labels):
    # Example preprocessing: normalize the data
    # This is a placeholder and should be replaced with actual preprocessing logic
    symptoms = symptoms / np.max(symptoms)
    return symptoms, labels

# Build your model
def build_model(input_shape):
    model = Sequential([
        tf.keras.Input(shape=input_shape),  # Use Input layer here
        Dense(64, activation='relu'),
        Dense(32, activation='relu'),
        Dense(1, activation='sigmoid')
    ])
    model.compile(optimizer=Adam(learning_rate=0.001), loss='binary_crossentropy', metrics=['accuracy'])
    return model

# Check TensorFlow version
def check_tensorflow_version():
    required_version = [2, 0, 0]
    version_match = re.match(r"(\d+)\.(\d+)\.(\d+)", tf.__version__)
    if version_match:
        current_version = list(map(int, version_match.groups()))
    else:
        raise EnvironmentError(f"Could not parse TensorFlow version: {tf.__version__}")
    if current_version < required_version:
        raise EnvironmentError(
            f"TensorFlow version must be >= {'.'.join(map(str, required_version))}. "
            f"Current version: {tf.__version__}. "
            "Please update TensorFlow by running 'pip install --upgrade tensorflow'."
        )
    print(f"TensorFlow version {tf.__version__} is compatible.")

# Log TensorFlow configuration
def log_tensorflow_config():
    print(f"TensorFlow version: {tf.__version__}")
    print(f"Available devices: {tf.config.list_physical_devices()}")

# Check GPU availability
def check_gpu_availability():
    if tf.config.list_physical_devices('GPU'):
        print("GPU is available and will be used.")
    else:
        print("GPU is not available. Using CPU instead.")

# Enhanced train_model function with error handling
def train_model():
    try:
        check_tensorflow_version()
        log_tensorflow_config()
        check_gpu_availability()
        
        # Load and preprocess data
        symptoms, labels = load_data()
        symptoms, labels = preprocess_data(symptoms, labels)
        
        # Build the model
        model = build_model((symptoms.shape[1],))
        
        # Train the model
        model.fit(symptoms, labels, epochs=10, batch_size=32, validation_split=0.2)
        
        # Save the model
        model.save('my_trained_model.keras')
        print("Model saved to my_trained_model.keras")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == '__main__':
    train_model()