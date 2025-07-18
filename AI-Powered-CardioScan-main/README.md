##  How AI-Powered CardioScan Works

The **AI-Powered CardioScan** system is designed to detect cardiac abnormalities by analyzing ECG images using **deep learning** models. It provides a full-stack solution with a secure backend and an interactive frontend.

---

###  1. ECG Image Input

Users start by uploading an ECG (Electrocardiogram) scan image through the web interface.

- Accepted formats: `.png`, `.jpg`, `.jpeg`
- A clean and responsive UI allows easy drag-and-drop or manual file selection

---

###  2. AI Model Processing

Once an ECG image is uploaded, it's sent to the **backend** for processing. Here's what happens:

#### Preprocessing

- The image is resized, normalized, and preprocessed to match the input shape expected by the models.
- Unnecessary noise or background elements are removed (if implemented).

####  Model Inference

Three different deep learning models can be used:

- **CNN (Convolutional Neural Network)** – for spatial feature extraction
- **LSTM (Long Short-Term Memory)** – for temporal patterns (in sequence-structured ECG data)
- **ViT (Vision Transformer)** – for transformer-based global feature learning

Each model:

- Has been trained on a labeled ECG dataset
- Outputs a **class label** (e.g., Normal, Arrhythmia, etc.)
- Returns a **confidence score**

You can either:

- Select the desired model
- Or use a model ensemble for better accuracy (if integrated)

---

### 3. Backend Functionality (Node.js + Express)

- Handles file uploads securely via `multer`
- Sends the image to the inference pipeline
- Returns the prediction in a structured JSON format

The backend also:

- Logs requests for analytics/debugging (optional)
- Uses environment variables for config and security (e.g., port, API keys)

---

### 4. Frontend Display (React.js)

After receiving the model's prediction:

- The frontend dynamically displays the **predicted condition**
- Also shows:
  - Confidence level (e.g., 92% accuracy)
  - A success or error alert
  - Option to upload another image

Features include:

- Responsive design (mobile & desktop)
- Smooth animations/transitions
- Easy navigation

---

###  5. Testing & Validation

- Models were trained and validated on publicly available ECG datasets (e.g., PTB-XL, MIT-BIH)
- Accuracy, Precision, Recall, and F1-Score metrics were evaluated
- The best-performing model was integrated into the pipeline

---

###  6. Security & Performance

- File size limits prevent large uploads
- Input validation avoids unsupported file types
- Asynchronous requests ensure smooth user experience
- Optional: Caching, rate limiting, or token-based access control (JWT)

---

### 7. Future Enhancements

- Add support for multi-lead ECG signals
- Integrate real-time data from medical devices
- Role-based user access (Doctor vs Patient)
- Add downloadable PDF report generation
- Deploy via AWS or Vercel for public access

  ### Home Page
<img width="899" height="443" alt="image" src="https://github.com/user-attachments/assets/061aa7ed-1299-4273-b0b3-003afdd2f42d" />

###  ECG Upload & Prediction Page
<img width="851" height="448" alt="image" src="https://github.com/user-attachments/assets/e0652eee-d0dd-47cc-b599-42445dbf9b0e" />

### Prediction Results
<img width="880" height="438" alt="image" src="https://github.com/user-attachments/assets/31060a1a-d4c8-4e6c-9f63-53585b795a35" />

