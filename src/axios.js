import axios from "axios";

const BASE_URL = "https://logo-eshop.herokuapp.com/api/v1";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTE5N2M2NWI2OWJiNGQ5ZmJjMDlhZCIsImFkbWluIjp0cnVlLCJpYXQiOjE2MzgwNjM4MzYsImV4cCI6MTYzODMyMzAzNn0.PPcQEtfnuuzEcGb5G4ilqPX5cqQD42aKHmbO-lcRJ-Q";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    token: `Bearer ${TOKEN}`,
  },
});
