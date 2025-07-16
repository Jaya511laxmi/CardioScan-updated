import React from "react";
import { Link } from "react-router-dom";
import usePrediction from "../../hooks/usePrediction";

const Explore = () => {
  const {
    selectedImage,
    loading,
    prediction,
    confidence,
    handleImageChange,
    handleRemoveImage,
    handleSubmit,
  } = usePrediction();

  return (
    <div className="min-h-screen bg-white">


      {/* Hero Section */}
      <section className="text-center py-7">
        <h1 className="text-xl md:text-2xl italic font-semibold text-blue-900">
          "Revolutionizing Heart Health: AI-Powered Cardiovascular Disease Detection with ECG Analysis"
        </h1>

        {(!prediction || !confidence) && (
          <div className="h-48 rounded-lg my-2 mx-auto max-w-4xl">
            <img src="/ecgimg.webp" className="w-[900px] h-48 rounded-md" alt="Default ECG" />
          </div>
        )}
      </section>

      {/* Upload and Learn Section */}
      <section className="bg-white text-center">
        {/* Section Text */}
        <p className="italic text-xl text-blue-950 font-semibold ">
          Upload ECG images and get accurate predictions for early diagnosis and peace of mind.
        </p>

        {/* Upload Button & Input */}
        <div className="flex justify-center mt-3 gap-6">
          {/* Label acts as button */}
          {
            prediction && confidence ? (
              <>
                <label
                  htmlFor="uploadImage"
                  className="bg-red-900 text-white px-6 py-2 rounded-lg  transition"
                >
                  <span className="italic font-semibold">Upload ECG Image</span>
                </label>

              </>
            ) : (
              <>
                <label
                  htmlFor="uploadImage"
                  className="bg-red-900 text-white px-6 py-2 rounded-lg hover:bg-red-800 transition cursor-pointer"
                >
                  <span className="italic font-semibold">Upload ECG Image</span>
                </label>
                <input
                  id="uploadImage"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </>
            )
          }
        </div>

        {/* Preview Image */}
        {selectedImage && (
          <div className="relative mt-6 flex justify-center">
            <img
              src={selectedImage}
              alt="Uploaded Preview"
              className="w-96 h-36 object-cover rounded-lg shadow-lg"
            />
            {/* Remove Button */}
            {
              prediction && confidence ? (
                <span></span>
              ) : (
                <button
                  onClick={handleRemoveImage}
                  className="absolute top-2 right-[500px] bg-black text-white rounded-full px-2 py-1 hover:bg-red-700 transition"
                >
                  ✕
                </button>
              )
            }

          </div>
        )}

        {/* Submit Button */}
        {selectedImage && (
          <div className="mt-6">
            {
              prediction && confidence ? (
                <button
                  disabled

                  className="bg-red-800 opacity-100 text-white px-6 py-2 rounded-lg "

                >
                  Submit                  </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="bg-red-800 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Submit"}
                </button>
              )
            }

          </div>
        )}

        {/* Prediction Results */}
        {selectedImage && prediction && confidence && (
          <>
            {prediction === "Normal" ? (
              <div className="mt-8 flex justify-center items-center m-3 gap-4 text-center">
                {/* Prediction Section */}
                <div className="p-4 w-48 bg-green-300 rounded-lg shadow">
                  <h3 className="text-lg font-semibold text-green-700">Prediction</h3>
                  <p className="text-green-900 italic">{prediction}</p>
                </div>
                {/* Confidence Section */}
                <div className="p-4 w-48 bg-yellow-100 rounded-lg shadow">
                  <h3 className="text-lg font-semibold text-yellow-700">Confidence Level</h3>
                  <p className="text-yellow-900 italic">{confidence}</p>
                </div>
              </div>
            ) : prediction === "Abnormal" ? (
              <div className="mt-8 flex justify-center items-center m-3 gap-4 text-center">
                {/* Prediction Section */}
                <div className="p-4 w-48 bg-red-300 rounded-lg shadow">
                  <h3 className="text-lg font-semibold text-red-700">Prediction</h3>
                  <p className="text-red-900 italic">{prediction}</p>
                </div>
                {/* Confidence Section */}
                <div className="p-4 w-48 bg-yellow-100 rounded-lg shadow">
                  <h3 className="text-lg font-semibold text-yellow-700">Confidence Level</h3>
                  <p className="text-yellow-900 italic">{confidence}</p>
                </div>
              </div>
            ) : null}
          </>
        )}


        {/* back button */}
        {
          prediction && confidence && (
            <div className="mt-7">
              <button onClick={() => window.location.reload()} className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition"
              >Check another ECG</button>
            </div>
          )
        }
      </section>
    </div>
  );
};

export default Explore;