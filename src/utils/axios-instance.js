import axios from "axios";

import { API_URL } from "../helper/config";

const axiosInstance = axios.create({
  baseURL: API_URL,
  ///
  // withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    config.headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    return config;
  },
  function (error) {
    console.log(error);
    // Do something with request error
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    if (error.status === 401) {
      if (error.config.url === "refresh-token") {
        localStorage.clear();
        return (window.location.href = "/login");
      }
      axiosInstance
        .post("refresh-token")
        .then((response) => {
          const accessToken = response.data.accessToken;
          localStorage.setItem("accessToken", accessToken);
          const { config } = error;
          config.headers = { Authorization: `Bearer ${accessToken}` };
          ///
          // config.withCredentials = true;
          return new Promise((resolve) => resolve(axios(config)));
        })
        .catch((error) => {
          console.log(error);
          return Promise.reject(error);
        });
    } else {
      // Do something with response error
      return Promise.reject(error);
    }
  }
);

export default axiosInstance;
