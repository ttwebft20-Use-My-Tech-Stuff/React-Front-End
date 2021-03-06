import axios from 'axios'

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token')
  return axios.create({
    baseURL: 'https://ttwebft20-use-my-tech-stuff.herokuapp.com/api',
    headers: {
      Authorization: token,
    },
  })
}
