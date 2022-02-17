import axios, { AxiosInstance } from "axios";

const header = {
};

const getAxiosInstance = (url: string): AxiosInstance => {

  const axiosInstance = axios.create({
    headers: header,
    baseURL: url,
  });

  return axiosInstance;
};

export default getAxiosInstance;
