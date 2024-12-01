import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const getHomeAboutData = async () => {
  try {
    const response = await axios.get(`${API_URL}/about`);
    return response.data.data[0];
  } catch (err) {
    console.log("Error fetching data", err || err.message);
    return null;
  }
};

export default getHomeAboutData;
