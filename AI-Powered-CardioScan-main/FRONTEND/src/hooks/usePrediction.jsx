import { useState } from "react";
import toast from "react-hot-toast";


// Custom Hook for Image Upload and Prediction
const usePrediction = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState(null);
  const [confidence, setConfidence] = useState(null);

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      toast.error("Please upload a valid image file.");
    }
  };

  // Handle removing the selected image
  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  // Handle submitting the image to the backend
  const handleSubmit = async () => {
    if (!selectedImage) {
      toast.error("Please upload an ECG image first!");
      return;
    }

    setLoading(true);

    try {
      // Convert base64 string to Blob
      const base64Data = selectedImage.split(",")[1]; // Remove the base64 prefix
      const byteCharacters = atob(base64Data);
      const byteNumbers = Array.from(byteCharacters, (char) => char.charCodeAt(0));
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: "image/png" }); // Change type if needed

      const formData = new FormData();
      formData.append("image", blob, "uploaded-image.png"); // Provide a filename

      const response = await fetch("http://localhost:5000/api/predict", {
        method: "POST",
        headers:{
          auth:localStorage.getItem('auth')
        },
        body: formData,
      });

      const data = await response.json();
console.log("data in data",data);

      setLoading(false);
      

      if (data.prediction) {
        console.log("Prediction data:", data);
        setPrediction(data.prediction);
        // setConfidence(data.confidence);
        const roundedConfidence = parseFloat(data.confidence).toFixed(2);
        setConfidence(`${roundedConfidence}%`);
      } else {
        toast.error("Error: " + data.error);
      }
    } catch (error) {
      console.error("Error occurred during prediction:", error);
      setLoading(false);
      toast.error("Error occurred during the prediction.");
    }
  };

  return {
    selectedImage,
    loading,
    prediction,
    confidence,
    handleImageChange,
    handleRemoveImage,
    handleSubmit,
  };
};

export default usePrediction;
