import axios from "axios";

const URL = "https://shortly-api-yxcy.onrender.com";

export const api = axios.create({ baseURL: URL });

const TOKEN = JSON.parse(localStorage.getItem("user"))?.token;

api.defaults.headers["Authorization"] = `Bearer ${TOKEN}`;

export function getRanking() {
  return api.get("/ranking");
}
