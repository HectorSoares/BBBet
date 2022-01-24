import { AxiosResponse } from 'axios';
import getAxiosInstance from '../apis/axiosInstance';
import User from '../domain/model/User';

const axiosInstance = getAxiosInstance(process.env.REACT_APP_BETRESULTS_API || '');

class BetResults {
  async listBetResults(): Promise<AxiosResponse<User[]>> {
    var response = await  axiosInstance.get('/listbetresults');
    console.log("listBetResults:", response.data.body);
    return response
  }
}

export default new BetResults();
