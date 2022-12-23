import axios from "axios";

const URL = "https://shortly-api-yxcy.onrender.com";

export const api = axios.create({ baseURL: URL });

const TOKEN = JSON.parse(localStorage.getItem("user"))?.token;

api.defaults.headers["Authorization"] = `Bearer ${TOKEN}`;

export function getRanking() {
  return api.get("/ranking");
}

export function signUp(body) {
  return api.post("/signup", body);
}

export function signIn(body) {
  return api.post("/signin", body);
}
