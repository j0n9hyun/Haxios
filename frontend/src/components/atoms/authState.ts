import { atom, useResetRecoilState } from 'recoil';
import axios from 'axios';
axios.defaults.withCredentials = true;
export const idState = atom({
  key: 'idState',
  default: '',
});

export const pwState = atom({
  key: 'pwState',
  default: '',
});

export type Props = {
  default: any;
};

export function Reset() {
  const resetId = useResetRecoilState(idState);
  const resetPw = useResetRecoilState(pwState);

  return {
    resetId,
    resetPw,
  };
}

export async function submitState(id: any, pw: any) {
  const response: any = await axios.post('api/users/login', {
    email: id,
    password: pw,
  });
  return response.data;
}

export async function logoutState() {
  const response: any = await axios.get('api/users/logout');
  return response.data;
}

export async function authenticationState() {
  const response: any = await axios.get('api/users/auth');
  return response.data;
}


// export const authenticationState = ({
//   key: 'authenticationState',
//   get: async() => {
//     const response: any = await axios.get('api/users/auth');
//     return response.data;
//   },
//   set: ({ set }, newValue) => {
//     set(idState || pwState , newValue);
//     console.log(set)
//   }
// });

