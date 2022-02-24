import { AxiosResponse } from 'axios';
import getAxiosInstance from '../apis/axiosInstance';
import Bet from '../domain/model/manager/Bet';
import Week from '../domain/model/manager/Week';
import BetResults from '../domain/model/results/BetResults';

const axiosInstance = getAxiosInstance(process.env.REACT_APP_BETRESULTS_API || '');


class BetResultsService {
  async listBetResults(): Promise<AxiosResponse<Bet[]>> {
    return await axiosInstance.get('/listbetresults');
  }

  async addResult(activeWeek?: Week, bet?: BetResults): Promise<AxiosResponse<any>> {
    const request = { week: activeWeek?.week, ...bet };
    return await axiosInstance.post('/createbetresults', request);

  }
}

export default new BetResultsService();
