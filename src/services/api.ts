import axios from "axios";

const api = axios.create({
    baseURL: "https://randomapi.com/api",
});

export default api;
