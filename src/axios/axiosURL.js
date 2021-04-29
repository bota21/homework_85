import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:2100"
});
export default instance;