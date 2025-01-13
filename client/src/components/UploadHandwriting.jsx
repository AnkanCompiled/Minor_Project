import React, { useState } from "react";
import { uploadImageApi } from "../api/data";

export default function UploadHandwriting() {
  const [file, setFile] = useState(null); // Use 'file' state to hold the file itself
  const [uploadStatus, setUploadStatus] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile); // Save the file object instead of the URL
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setUploadStatus("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file); // Append the actual file object

    try {
      const result = await uploadImageApi(formData);
      console.log(result);
      setUploadStatus("File uploaded successfully!");
    } catch (error) {
      console.error(error);
      setUploadStatus("Failed to upload the file.");
    }
  };

  return (
    <div className="flex justify-center gap-3 px-4 w-[80vh] py-3 flex-col bg-[#8693AB] rounded-md shadow-md">
      <h1 className="text-xl font-semibold text-center text-white">
        Upload Your Handwriting
      </h1>
      <input
        className="w-full bg-white text-lg rounded-md"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
      {file && (
        <div className="flex gap-2 flex-col justify-center">
          <img
            className="rounded-lg"
            src={URL.createObjectURL(file)}
            alt="Uploaded or Captured"
          />
          <button
            onClick={handleUpload}
            className="w-full py-4 bg-[#212227] text-white rounded-md hover:bg-gray-800 text-xl font-bold duration-300"
          >
            Submit
          </button>
        </div>
      )}
      {uploadStatus && (
        <p className="text-white text-center mt-3">{uploadStatus}</p>
      )}
    </div>
  );
}
