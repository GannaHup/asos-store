import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL

const axiosApi = axios.create({
  baseURL: baseURL
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
