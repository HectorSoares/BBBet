import { AxiosResponse } from 'axios';
import getAxiosInstance from '../apis/axiosInstance';
import Bet from '../domain/model/manager/Bet';
import User from '../domain/model/User';

const axiosInstance = getAxiosInstance(process.env.REACT_APP_BETMANAGER_API || '');

class BetManagerService {
  async listBetManager(): Promise<AxiosResponse<User[]>> {
    var response = await  axiosInstance.get('/listbetmanager');
    console.log("listBetManager:", response.data.body);
    return response
  }

  async createBetManager(bet: Bet): Promise<AxiosResponse<User[]>> {
    var response = await  axiosInstance.post('/createbetmanager', bet);
    console.log("createbetmanager:", response.data.body);
    return response
  }
}

export default new BetManagerService();
