import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const getLandingData = async () => {
  try {
    console.log("API URL:", `${API_URL}/landing`);
    const response = await axios.get(`${API_URL}/landing`);
    return response.data.data[0];
  } catch (err) {
    console.log("Error fetching data", err || err.message);
    return null;
  }
};

export default getLandingData;
