import axios from "axios"
import apiConfig from "./apiConfig";

console.log( apiConfig.baseURL)

const axiosGet = axios.create({
  baseURL: apiConfig.baseURL,
  params: {
    api_key: apiConfig.api_key,
    language:apiConfig.language,
    append_to_response: apiConfig.append_to_response
  }
});

export default axiosGet