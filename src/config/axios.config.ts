import axios from "axios";

const api = axios.create({
  baseURL: "https://official-joke-api.appspot.com/",
});
api.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export { api };
