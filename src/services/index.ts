import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL
const apiKey = process.env.NEXT_PUBLIC_X_RAPID_API_KEY
const apiHost = process.env.NEXT_PUBLIC_RAPID_API_HOST

const axiosApi = axios.create({
  baseURL: baseURL,
  headers: {
    'X-RapidAPI-Key': apiKey,
    'X-RapidAPI-Host': apiHost
  }
})

axiosApi.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

axiosApi.interceptors.response.use(
  (res) => {
    return res
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default axiosApi
