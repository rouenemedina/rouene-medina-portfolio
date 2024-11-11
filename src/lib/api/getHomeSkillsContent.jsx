import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const getHomeSkillsContent = async () => {
  try {
    const response = await axios.get(`${API_URL}/skills/content`);
    console.log(response.data.data);
    return response.data.data;
  } catch (err) {
    console.log("Error fetching data", err);
    return null;
  }
};

export default getHomeSkillsContent;
