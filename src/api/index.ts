import axios from 'axios';

import type { IPosts } from './types';

const instance = axios.create({
  baseURL: 'https://strapi4f.onrender.com/api/',
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

export const getPosts = async () => {
  const { data } = await instance.get<IPosts>('posts?populate=*');
  return data;
};