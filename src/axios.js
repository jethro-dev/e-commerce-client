import axios from "axios";

const BASE_URL = "https://logo-eshop.herokuapp.com/api/v1";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  .currentUser.accessToken;

const instance = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});

export default instance;
