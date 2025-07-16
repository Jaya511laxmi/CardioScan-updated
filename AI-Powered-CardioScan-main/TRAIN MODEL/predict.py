# after vision transformer

import os
from tensorflow.keras.models import load_model
from preprocessing import preprocess_single_image
import numpy as np

# Suppress unnecessary logs
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'

# Load the hybrid ensemble model
model_path = 'D:/final year projet/models/ensemble_model.h5'
model = load_model(model_path, compile=False)

def predict_image(image_path):
    """
    Predict whether the image is 'Normal' or 'Abnormal' using the hybrid ensemble model.
    """
    # Preprocess the image for both CNN-LSTM and Vision Transformer
    img_cnn, img_vit = preprocess_single_image(image_path)
    
    # Perform prediction
    prediction = model.predict([img_cnn, img_vit])  # Pass both inputs to the model
    predicted_class = np.argmax(prediction)  # Get class with highest probability
    confidence = prediction[0][predicted_class] * 100  # Confidence as percentage

    return predicted_class, confidence

# Example usage
if __name__ == "__main__":
    # Provide the image path
    image_path = 'D:/final year projet/data/train/normal/Normaltestdata_2.jpg'
    
    # Predict and print results
    result, confidence = predict_image(image_path)
    print(f"Prediction: {'Abnormal' if result == 1 else 'Normal'}, Confidence: {confidence:.2f}%")
