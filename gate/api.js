import axios from "axios";
import {toast, ToastContainer} from "react-toastify";

export const client = axios.create({
    baseURL : 'https://reqres.in/api'
});
client.interceptors.response.use(
    response => response,
    error => {
       if (error.response.status === 404) {
           toast('404 not found');
       }
    }
)