import axios ,{AxiosResponse , AxiosRequestConfig} from 'axios';
import Cookies from 'js-cookie';


const Axios = axios.create({
    baseURL: 'http://localhost:8080/user-api'
})

Axios.interceptors.request.use(
    (request:AxiosRequestConfig) => {

        const token  = Cookies.get('token');
        if(token){
            console.log('token is avaliable')
            request.headers["Authorization"] = "Bearer " + token;
        }
        return request;
    },
    error => {
        Promise.reject(error)
    }
)

Axios.interceptors.response.use(
    (response :AxiosResponse) => {
        return response;
    },
    (error) => {
        if (error.response.status === 401) {
            console.log("401");
            store.dispatch(refreshToken());
            return Promise.resolve();
          }
        if ( error.response.status === 402){
            console.log('number error is 422')
        }
          return Promise.reject(error);
    }
)

export default Axios;