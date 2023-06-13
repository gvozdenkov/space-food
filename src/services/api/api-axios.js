import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://norma.nomoreparties.space/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});
