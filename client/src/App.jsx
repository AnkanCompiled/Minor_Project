import React, { useState } from "react";
import UploadHandwriting from "./components/UploadHandwriting";

export default function App() {
  const [imagePath, setImagePath] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async () => {};

  return (
    <div className="h-screen w-screen bg-[#AAB9CF]">
      <header className="w-screen bg-[#637074] text-white py-4 px-2 font-bold text-2xl shadow-lg">
        Personality by Handwriting
      </header>
      <div className="my-4 flex justify-center">
        <UploadHandwriting />
      </div>

      {/* <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Handwriting Prediction
          </h2>
          <input
            type="text"
            placeholder="Enter image path"
            value={imagePath}
            onChange={(e) => setImagePath(e.target.value)}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Run Python Code
          </button>

          <div className="mt-6">
            <h3 className="text-xl font-medium">Prediction Result:</h3>
            {error ? (
              <p className="text-red-500 mt-2">{error}</p>
            ) : (
              <pre className="bg-gray-100 p-4 rounded-md text-sm">
                {JSON.stringify(result, null, 2)}
              </pre>
            )}
          </div>
        </div>
      </div>*/}
    </div>
  );
}
