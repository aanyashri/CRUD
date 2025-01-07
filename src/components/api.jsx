import axios from "axios";

const api = axios.create({
  baseURL: "https://apnaorganicstore.in/crud_api/", 
});

export default api;
