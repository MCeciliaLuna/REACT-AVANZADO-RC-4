import axios from "axios";

export const axiosDash = axios.create({
  baseURL: "https://api-practices.onrender.com/",
  timeout: 120000,
  headers: {
    "Content-Type": "application/json",
  },
});
