import { atom, selector, useResetRecoilState } from 'recoil';
import axios from 'axios';

export const idState = atom({
  key: 'idState',
  default: '',
});
export const pwState = atom({
  key: 'pwState',
  default: '',
});

// export const testState = selector({
//   key: 'testState',
//   get: async ({ get }) => {
//     const response = await axios.post('http://localhost:5000/api/users/login');
//     return response.data;
//   },
// });

export type Props = {
  default: any;
};

// export const testState = selector({
//   key: 'testState',
//   get: async ({ get }) => {
//     const response = await axios.post('api/users/login', {
//       email: idState,
//       password: pwState,
//     });
//     return response;
//   },
// });

// export function useFoo() {
//   return useRecoilValue(idState);
// }
// export function useBar() {
//   return useRecoilValue(pwState);
// }

export function useReset() {
  const resetId = useResetRecoilState(idState);
  const resetPw = useResetRecoilState(pwState);
  return {
    resetId,
    resetPw,
  };
}
