import { atom, selector, useResetRecoilState } from 'recoil';
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

export const isLoginState = atom({
  key: 'isLoginState',
  default: false,
})


export type RegisterProps = {
  id: any;
  pw: any;
  name: any;
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

export async function registerState(id: string, pw: string, name: string) {
  const response: any = await axios.post('api/users/register', {
    email: id,
    password: pw,
    name: name,
  });
  return response.data;
}

export async function authenticationState() {
  const response: any = await axios.get('api/users/auth');
  return response.data;
}
export const testState = selector({
  key: 'testState',
  get: async() => {
    const response: any = await axios.get('api/users/auth');
    return response.data;
  },
  set: ({ set }, newValue) => {
    set(idState, newValue);
    set(pwState, newValue);
  }
});



