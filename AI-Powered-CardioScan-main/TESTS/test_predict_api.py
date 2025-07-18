import requests
import os

API_URL = "http://localhost:5000/predict"

# Path to a sample ECG image for testing
SAMPLE_IMAGE = "tests/sample_ecg.png"

def test_prediction_endpoint():
    # Check that sample image exists
    assert os.path.exists(SAMPLE_IMAGE), "Test ECG image not found."

    # Open the file in binary mode and send POST request
    with open(SAMPLE_IMAGE, "rb") as img:
        files = {"file": img}
        response = requests.post(API_URL, files=files)

    # Check status code
    assert response.status_code == 200, f"Expected 200 OK, got {response.status_code}"

    # Parse and validate JSON response
    data = response.json()
    assert "prediction" in data, "Missing 'prediction' key in response."
    assert "confidence" in data, "Missing 'confidence' key in response."
    assert isinstance(data["prediction"], str), "Prediction should be a string."
    assert isinstance(data["confidence"], (int, float)), "Confidence should be numeric."

    print(f" Prediction: {data['prediction']} with {data['confidence']}% confidence")