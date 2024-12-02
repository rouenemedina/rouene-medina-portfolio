import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const getHomeProjectsList = async () => {
  try {
    const response = await axios.get(`${API_URL}/projects/list`);
    return response.data.data;
  } catch (err) {
    console.log("Error fetching data", err || err.message);
    return null;
  }
};

export default getHomeProjectsList;
