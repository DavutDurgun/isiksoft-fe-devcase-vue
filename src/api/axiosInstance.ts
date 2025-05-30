import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://devcase.isiksoftyazilim.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

axiosInstance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    console.error('API isteğinde hata oluştu:', error)
    return Promise.reject(error)
  },
)

export default axiosInstance
