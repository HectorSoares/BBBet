import { AxiosResponse } from 'axios';
import getAxiosInstance from '../apis/axiosInstance';
import User from '../domain/model/User';

const axiosInstance = getAxiosInstance('https://zeh4q87pql.execute-api.us-east-1.amazonaws.com/dev');

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
}

export default new UserService();
