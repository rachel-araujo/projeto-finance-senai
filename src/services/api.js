import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.12.119:3000', //ip local da máquina
});

export default api;
