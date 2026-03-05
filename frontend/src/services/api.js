import axios from "axios";

const API = axios.create({
  baseURL: "https://login-snyp.onrender.com"
});

export const loginUser = (data) => {
  return API.post("/login", data);
};