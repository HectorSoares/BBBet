import { AxiosResponse } from 'axios';
import getAxiosInstance from '../apis/axiosInstance';
import Brother from '../domain/model/Brother';

const axiosInstance = getAxiosInstance(process.env.REACT_APP_BROTHERS_API || '');

class BrothersService {
  async listBrothers(): Promise<AxiosResponse<Brother[]>> {
    return await axiosInstance.get('/');
  }
}

export default new BrothersService();
