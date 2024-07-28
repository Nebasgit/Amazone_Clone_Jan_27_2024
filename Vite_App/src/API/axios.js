
import axios from "axios"

const axiosInstance = axios.create({
  // baseURL:"http://127.0.0.1:5001/clone-90533/us-central1/api"
  baseURL:"https://api-nxdjb3prpa-uc.a.run.app"
})

export {axiosInstance}