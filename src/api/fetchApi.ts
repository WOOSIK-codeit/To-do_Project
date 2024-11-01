import axiosInstance from './axiosInstance';

export const fetchApi = async (apiUrl: string) => {
  try {
    const response = await axiosInstance.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('fetch api error : ', error);
    return {};
  }
};

export default fetchApi;
