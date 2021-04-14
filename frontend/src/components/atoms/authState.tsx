import { atom, selector, useRecoilState, selectorFamily } from 'recoil';
import axios from 'axios';

export const idState = atom({
  key: 'idState',
  default: '',
});
export const pwState = atom({
  key: 'pwState',
  default: '',
});

export const testState = selector({
  key: 'testState',
  get: async ({ get }) => {
    const response = await axios.post('http://localhost:5000/api/users/login');
    // console.log(response.data);
    return response.data;
  },
});
