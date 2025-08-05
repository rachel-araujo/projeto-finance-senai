import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.12.115:3000', 
});

export default api;
