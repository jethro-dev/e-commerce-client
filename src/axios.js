import axios from "axios";

const BASE_URL = "https://logo-eshop.herokuapp.com/api/v1";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTE5N2M2NWI2OWJiNGQ5ZmJjMDlhZCIsImFkbWluIjp0cnVlLCJpYXQiOjE2MzgwNjAwODMsImV4cCI6MTYzODMxOTI4M30.3ULaO5YBxuTRHSpygx5GWLgji-0QOsIiQZY7HCC9jTc";

// JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)
//   ?.currentUser?.accessToken;

const instance = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});

export default instance;
