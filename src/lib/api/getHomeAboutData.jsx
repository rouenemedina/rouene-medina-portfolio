import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
console.log(`API URL: ${API_URL}`);
const getHomeAboutData = async () => {
  try {
    const response = await axios.get(`${API_URL}/about`);
    console.log("Response:", response.data.data);
    return response.data.data;
  } catch (err) {
    console.log("Error fetching data", err || err.message);
    return null;
  }
};

export default getHomeAboutData;
