import React, { useState } from "react";
import { fetchPersonalityApi, uploadImageApi } from "../api/data";
import LoaderGear from "./LoaderGear";
import { useData } from "../context/dataContext";
import { useNavigate } from "react-router-dom";

export default function UploadHandwriting() {
  const navigate = useNavigate();
  const { updateUserData } = useData();
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(<></>);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setUploadStatus("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const result = await uploadImageApi(formData);
      setUploadStatus(
        <div className="flex justify-center items-center gap-1">
          <LoaderGear />
          <p className="text-gray-500">Please wait analyzing data...</p>
        </div>
      );
      const personality = await fetchPersonalityApi(result?.file_path);
      console.log(personality);
      updateUserData(personality);
      setUploadStatus(<p className="text-lime-600">✅ Data analyzed</p>);
      navigate("/data");
    } catch (error) {
      console.error(error);
      setUploadStatus("Failed to upload the file.");
    }
  };

  return (
    <div className="flex justify-center gap-3 px-4 w-full sm:w-[80vw] xl:w-[40vw] py-3 flex-col bg-[#F7F7F7] text-[#333333] rounded-md shadow-md">
      <input
        className="w-full bg-white text-lg rounded-sm"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
      {file && (
        <div className="flex gap-2 flex-col justify-center">
          <img
            className="rounded-lg border-4"
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
        <div className="text-white text-center">{uploadStatus}</div>
      )}
    </div>
  );
}
