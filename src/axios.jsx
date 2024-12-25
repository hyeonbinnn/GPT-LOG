import axios from 'axios';

export const unsplashInstance = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_API_KEY}`,
  },
});

export const GPTInstance = axios.create({
  baseURL: 'https://api.openai.com/v1/chat/completions',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GPT_API_KEY}`,
    'Content-Type': 'application/json',
  },
});
