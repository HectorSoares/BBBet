import { AxiosResponse } from 'axios';
import getAxiosInstance from '../apis/axiosInstance';
import User from '../domain/model/User';

const axiosInstance = getAxiosInstance(process.env.REACT_APP_USER_API || '');

class UserService {
  async listUser(): Promise<AxiosResponse<any>> {
    const response = await axiosInstance.get('/listuser');
    console.log(response);
    return response
  }

  async easterEgg(userId: any): Promise<AxiosResponse<any>> {
    const response = await axiosInstance.post(`/easteregg`, { id: userId });
    return response
  }

  async getUser(id?: string): Promise<AxiosResponse<any>> {
    const response = await axiosInstance.get(`getuser2/?id=${id}`);
    return response
  }

  async addBet(id?: string, bet?: any, week?: string): Promise<AxiosResponse<any>> {
    const request = { id, bet, week };
    const response = await axiosInstance.post(`/adduserbet`, request);
    return response
  }
}

export default new UserService();
