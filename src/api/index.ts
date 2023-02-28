import axios, { type AxiosResponse } from 'axios';

// export const baseURL = 'http://localhost:1337';
export const baseURL = 'https://strapi4f.onrender.com';

const API_URL = `${baseURL}/api/`;

export const instance = axios.create({
  baseURL: API_URL,
  withCredentials: true
});

export async function extractData<T>(promise: Promise<AxiosResponse<T>>) {
  const { data } = await promise;
  return data;
}
