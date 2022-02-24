import axios, { AxiosInstance } from "axios";

const header = {
};

const getAxiosInstance = (url: string): AxiosInstance => {

  return axios.create({
    headers: header,
    baseURL: url,
  });
};

export default getAxiosInstance;
