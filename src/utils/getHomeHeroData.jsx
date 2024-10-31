import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
console.log(`API URL: ${API_URL}`);

async function getHomeHeroData() {
    try {
        const response = await axios.get(`${API_URL}/hero`);
        console.log(response);
        console.log(response.data[0]);
        return response.data[0];
    } catch(err) {
        console.log("Error fetching data", err);
        return null;
    }
}

export default getHomeHeroData;