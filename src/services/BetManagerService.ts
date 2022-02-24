import { AxiosResponse } from 'axios';
import getAxiosInstance from '../apis/axiosInstance';
import Bet from '../domain/model/manager/Bet';
import User from '../domain/model/User';

const axiosInstance = getAxiosInstance(process.env.REACT_APP_BETMANAGER_API || '');

class BetManagerService {
  async listBetManager(): Promise<AxiosResponse<User[]>> {
    return await axiosInstance.get('/listbetmanager');
  }

  async createBetManager(bet: Bet): Promise<AxiosResponse<any>> {
    return await axiosInstance.post('/createbetmanager', bet);
  }

  async closeBet(id?: string): Promise<AxiosResponse<any>> {
    return await axiosInstance.post('/closebet', { id });
  }

  async closeWeek(id?: string): Promise<AxiosResponse<any>> {
    return await axiosInstance.post('/closeweek', { id });
  }
}

export default new BetManagerService();
