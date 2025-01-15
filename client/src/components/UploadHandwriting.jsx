import React, { useRef, useState } from "react";
import { fetchPersonalityApi, uploadImageApi } from "../api/data";
import LoaderGear from "./LoaderGear";
import { useData } from "../context/dataContext";
import { useNavigate } from "react-router-dom";
import upload2 from "../assets/upload2.png";

export default function UploadHandwriting() {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const { updateUserData, userImage, updateImage } = useData();
  const [uploadStatus, setUploadStatus] = useState(<></>);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      updateImage(selectedFile);
    }
  };

  const handleInputFile = (e) => {
    if (inputRef && inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleUpload = async () => {
    if (!userImage) {
      setUploadStatus("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", userImage);

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
    <div className={`flex justify-center flex-col text-[#333333]`}>
      {userImage ? (
        <div className="flex w-max gap-3 flex-col justify-center px-4 py-3 rounded-md bg-white shadow-xl">
          <img
            className="rounded-lg border-4 w-[80vw] lg:w-[30vw]"
            src={URL.createObjectURL(userImage)}
            alt="Uploaded or Captured"
          />
          <div className="flex justify-center">
            <button
              className="text-xl w-max px-4 py-1 rounded-lg text-[#FF6F61] font-semibold hover:bg-[#FF6F61] hover:text-white hover:shadow-lg duration-300"
              onClick={handleInputFile}
            >
              Pick another Image
            </button>
          </div>

          <button
            onClick={handleUpload}
            className="w-full py-4 bg-[#212227] text-white rounded-md hover:bg-gray-800 text-xl font-bold duration-300"
          >
            Submit
          </button>
          {uploadStatus && (
            <div className="text-white text-center">{uploadStatus}</div>
          )}
        </div>
      ) : (
        <div className="relative w-full flex justify-center ">
          <button
            className="bg-white py-5 px-8 rounded-md shadow-xl hover:scale-105 duration-300"
            onClick={handleInputFile}
          >
            <img src={upload2} className="h-10" alt="Upload" />
          </button>
        </div>
      )}
      <input
        className="hidden"
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleFileChange}
      />
    </div>
  );
}
