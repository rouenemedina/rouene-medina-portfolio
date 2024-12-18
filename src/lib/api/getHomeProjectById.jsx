import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const getProjectById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/projects/${id}`);
    console.log("axios project by id response:", response.data.data);
    return response.data.data;
  } catch (err) {
    console.log("Error fetching data", err || err.message);
    return null;
  }
};

export default getProjectById;
