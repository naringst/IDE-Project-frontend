import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: headers,
  withCredentials: true,
});

export default instance;
