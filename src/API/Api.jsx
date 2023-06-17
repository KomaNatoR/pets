import axios from 'axios';
import { toast } from 'react-toastify';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://barkend.onrender.com/api',
  timeout: 2000,
});

export const getNews = async params => {
  try {
    const response = await instance.get('/news', { params });

    return response.data;
  } catch (error) {
    toast.error(error.message);
  }
};

export const getFriends = async() => {
  try {
    const response = await instance.get('/friends');

    return response.data;
  } catch (error) {
    toast.error(error.message);
  }
};

export const getNotices = async(category, params) => {
  try {
    const response = await instance.get(`/notices/${category}`, { params });

    return response.data;
  } catch (error) {
    toast.error(error.message);
  }
};