import axios, {AxiosInstance, AxiosRequestConfig} from "axios";

const axiosParams: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_STRAPI_API_URL,
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer " + import.meta.env.VITE_STRAPI_API_KEY,
  },
}

const axiosInstance = axios.create(axiosParams)

const api = (axios: AxiosInstance) => {
  return {
    get: (url: string, config: AxiosRequestConfig = {}) => axios.get(url, config),
    post: (url: string, data: object, config: AxiosRequestConfig = {}) => axios.post(url, data, config),
    put: (url: string, data: object, config: AxiosRequestConfig = {}) => axios.put(url, data, config),
    patch: (url: string, data: object, config: AxiosRequestConfig = {}) => axios.patch(url, data, config),
    delete: (url: string, config: AxiosRequestConfig = {}) => axios.delete(url, config),
  }
}

export default api(axiosInstance)