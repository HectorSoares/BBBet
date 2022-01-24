import { AxiosResponse } from 'axios';
import getAxiosInstance from '../apis/axiosInstance';
import User from '../domain/model/User';

const axiosInstance = getAxiosInstance(process.env.BETMANAGER_API || '');

class BetManagerService {
  async listBetManager(): Promise<AxiosResponse<User[]>> {
    var response = await  axiosInstance.get('/listbetmanager');
    console.log("listBetManager:", response.data.body);
    return response
  }
}

export default new BetManagerService();
