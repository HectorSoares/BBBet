import { AxiosResponse } from 'axios';
import getAxiosInstance from '../apis/axiosInstance';
import Brother from '../domain/model/Brother';

const axiosInstance = getAxiosInstance(process.env.BROTHERS_API || '');

class BrothersService {
  async listBrothers(): Promise<AxiosResponse<Brother[]>> {
    var response = await  axiosInstance.get('/');
    return response
  }
}

export default new BrothersService();
