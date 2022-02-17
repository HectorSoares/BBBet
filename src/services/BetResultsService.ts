import { AxiosResponse } from 'axios';
import getAxiosInstance from '../apis/axiosInstance';
import Bet from '../domain/model/manager/Bet';
import Week from '../domain/model/manager/Week';
import BetResults from '../domain/model/results/BetResults';

const axiosInstance = getAxiosInstance(process.env.REACT_APP_BETRESULTS_API || '');


class BetResultsService {
  async listBetResults(): Promise<AxiosResponse<Bet[]>> {
    const response = await axiosInstance.get('/listbetresults');
    console.log("listBetResults:", response.data.body);
    return response
  }

  async addResult(activeWeek?: Week, bet?: BetResults): Promise<AxiosResponse<any>> {

    const request = { week: activeWeek?.week, ...bet };

    const response = await axiosInstance.post('/createbetresults', request);
    return response;
  }
}

export default new BetResultsService();
