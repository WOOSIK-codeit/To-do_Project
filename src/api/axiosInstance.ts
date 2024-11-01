import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://assignment-todolist-api.vercel.app', // 기본 URL 설정
});

export default axiosInstance;
