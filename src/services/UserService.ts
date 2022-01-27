import { AxiosResponse } from 'axios';
import getAxiosInstance from '../apis/axiosInstance';
import Bet from '../domain/model/results/Bet';
import User from '../domain/model/User';

const axiosInstance = getAxiosInstance(process.env.REACT_APP_USER_API || '');

class UserService {
  async listUser(): Promise<AxiosResponse<User[]>> {
    var response = await  axiosInstance.get('/');
    console.log("listUser:", response.data.body);
    return response
  }

  async getUser(id?: string): Promise<AxiosResponse<any>> {
    var response = await  axiosInstance.get(`getuser2/?id=${id}`);
    console.log("getUser:", response);
    return response
  }

  async addBet(id?: string, bet?: any): Promise<AxiosResponse<any>> {
    // var response = await  axiosInstance.get(`getuser2/?id=${id}`);
    // console.log("getUser:", response);
    //return response
    console.log("bete pronta: ", bet);
    return ;
  }
}

export default new UserService();
