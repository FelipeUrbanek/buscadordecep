import axios from 'axios'

/* https://viacep.com.br/ws/83050130/json/ */

const api = axios.create({
  baseURL: 'https://viacep.com.br/ws/'
})

export default api
