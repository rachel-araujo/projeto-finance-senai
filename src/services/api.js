import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001', // use IP da máquina se testar no celular físico
});

export default api;
