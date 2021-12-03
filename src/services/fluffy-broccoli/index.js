import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000',
  timeout: 3000,
});

export const register = ({ username, email, password, re_password }) =>
  instance.post('/auth/users/', { username, email, password, re_password });
