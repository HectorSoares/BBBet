import { AxiosResponse } from 'axios';
import getAxiosInstance from '../apis/axiosInstance';

const axiosInstance = getAxiosInstance(process.env.REACT_APP_USER_API || '');

class UserService {
  async listUser(): Promise<AxiosResponse<any>> {
    return await axiosInstance.get('/listuser');
  }

  async easterEgg(userId: any): Promise<AxiosResponse<any>> {
    return await axiosInstance.post(`/easteregg`, { id: userId });
  }

  async getUser(id?: string): Promise<AxiosResponse<any>> {
    return await axiosInstance.get(`getuser2/?id=${id}`);
  }

  async addBet(id?: string, bet?: any, week?: string): Promise<AxiosResponse<any>> {
    const request = { id, bet, week };
    return await axiosInstance.post(`/adduserbet`, request);
  }
}

export default new UserService();
