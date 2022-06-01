import axios from 'axios';
import { IPureTodo, ITodo } from '../models/ITodo';

const { REACT_APP_SERVER_URL } = process.env;

export class WebService {
  async getData() {
    const { data } = await axios.get<ITodo[]>(REACT_APP_SERVER_URL!);
    return data;
  }

  async postData(value: IPureTodo) {
    const { data } = await axios.post<ITodo>(REACT_APP_SERVER_URL!, value);
    return data;
  }

  async deleteData(value: ITodo) {
    const { data } = await axios.delete<ITodo>(REACT_APP_SERVER_URL!, {
      data: value,
    });
    return data;
  }

  async updateData(value: ITodo) {
    const { data } = await axios.patch(REACT_APP_SERVER_URL!, value);
    return data;
  }
}
