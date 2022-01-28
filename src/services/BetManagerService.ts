import { AxiosResponse } from 'axios';
import getAxiosInstance from '../apis/axiosInstance';
import Bet from '../domain/model/manager/Bet';
import User from '../domain/model/User';

const axiosInstance = getAxiosInstance(process.env.REACT_APP_BETMANAGER_API || '');

class BetManagerService {
  async listBetManager(): Promise<AxiosResponse<User[]>> {
    var response = await  axiosInstance.get('/listbetmanager');
    return response
  }

  async createBetManager(bet: Bet): Promise<AxiosResponse<any>> {
    var response = await  axiosInstance.post('/createbetmanager', bet);
    return response
  }

  async closeBet(id?: string): Promise<AxiosResponse<any>> {
    var response = await  axiosInstance.post('/closebet', {id});
    return response
  }

  async closeWeek(id?: string): Promise<AxiosResponse<any>> {
    var response = await  axiosInstance.post('/closeweek', {id});
    return response
  }
}

export default new BetManagerService();
