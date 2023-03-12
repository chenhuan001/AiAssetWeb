/**
 * 网络请求配置
 */
import axios from "axios";

const servise = axios.create({
    baseURL:"http://124.223.213.145:5500/api",
    timeout:5000
})
servise.interceptors.request.use(
  (config) => {
    config.data = JSON.stringify(config.data);
    config.headers = {
      "Content-Type": "application/json",
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default servise