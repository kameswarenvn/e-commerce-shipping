import axios from "axios";

const axiosHandler = axios.create({
  baseURL: "https://fakestoreapi.com/",
  timeout: 8000,
  headers: {
    "content-type": "application/json",
    Authorization: "dummy token",
  },
});

export default axiosHandler;