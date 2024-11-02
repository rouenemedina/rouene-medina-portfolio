import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
console.log(`API URL: ${API_URL}`);
const getHomeAboutData = async () => {
    try {
        const response = await axios.get(`${API_URL}/about`);
        return response.data[0];
    } catch(err) {
        console.log("Error fetching data", err);
        return null;
    }
};

export default getHomeAboutData;