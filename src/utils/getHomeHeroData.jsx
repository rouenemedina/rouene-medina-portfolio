import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
console.log(`API URL: ${API_URL}`);

async function getHomeHeroData() {
    try {
        const response = await axios.get(`${API_URL}/hero`);
        return response.data.data;
    } catch(err) {
        console.log("Error fetching data", err);
        return null;
    }
}

export default getHomeHeroData;