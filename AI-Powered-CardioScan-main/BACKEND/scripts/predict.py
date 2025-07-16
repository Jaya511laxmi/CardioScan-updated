import sys
import os
from tensorflow.keras.models import load_model
import cv2
from preprocessing import preprocess_single_image
import numpy as np

# Suppress TensorFlow logs
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'

# Ensure UTF-8 output
sys.stdout.reconfigure(encoding='utf-8')

def predict_image(image_path, model_path):
    print(f"Loading image from {image_path}")
    img = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
    if img is None:
        raise Exception(f"Failed to load image from {image_path}")
    img = cv2.resize(img, (128, 128))
    img = img.astype('float32') / 255  # Normalize the image
    img = np.reshape(img, (1, 128, 128, 1))  # Add batch dimension

    # Preprocess the input image using the helper function
    img_cnn, img_vit = preprocess_single_image(image_path)
    


    print(f"Loading model from {model_path}")
    model = load_model(model_path)

    # Perform prediction
    prediction = model.predict([img_cnn, img_vit])  # Pass both inputs to the model
    predicted_class = np.argmax(prediction)  # Get class with highest probability
    confidence = prediction[0][predicted_class] * 100  # Confidence as percentage

    return predicted_class, confidence

if __name__ == "__main__":
    try:
        image_path = sys.argv[1]  # Image path passed from Node.js
        model_path = sys.argv[2]  # Model path passed from Node.js

        # Predict
        predicted_class, confidence = predict_image(image_path, model_path)

        # Output results to stdout for Node.js to capture
        print(predicted_class)
        print(confidence)
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)

