import axios from "axios";

const axiosWithAuth = () => {
    const token = localStorage.getItem('token')
    return axios.create({
        baseURL: 'http://ttwebft20-use-my-tech-stuff.herokuapp.com/api',
        headers: {
            Authorization: token
        }
    })
}

export default axiosWithAuth;
