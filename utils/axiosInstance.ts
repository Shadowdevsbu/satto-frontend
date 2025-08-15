import axios, {AxiosError, InternalAxiosRequestConfig} from "axios";

const API = axios.create({
    baseURL: 'http://localhost:3000'
})

API.interceptors.request.use((config: InternalAxiosRequestConfig ) => {
        const token = localStorage.getItem('token')
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config 
    }, (error: AxiosError) => {
    throw error
    }

    )

    export default API
