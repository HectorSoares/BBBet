import { AxiosResponse } from 'axios';
import getAxiosInstance from '../apis/axiosInstance';
import Brother from '../domain/model/Brother';

const axiosInstance = getAxiosInstance('https://w7qw2u3mnd.execute-api.us-east-1.amazonaws.com/dev');

class BrothersService {
  async listBrothers(): Promise<AxiosResponse<Brother[]>> {
    var response = await  axiosInstance.get('/');
    return response
  }
}

export default new BrothersService();
