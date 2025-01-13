import axios from "axios";

export const fetchPersonalityApi = async () => {
  try {
    const response = await axios.post("http://localhost:5000/predict", {
      image_path: imagePath,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const uploadImageApi = async (formData) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
