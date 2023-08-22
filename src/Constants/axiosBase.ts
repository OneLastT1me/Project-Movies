import axios from 'axios'


axios.defaults.baseURL = 'https://api.themoviedb.org'

axios.interceptors.request.use(async (config) => {

    return config;
}

)

