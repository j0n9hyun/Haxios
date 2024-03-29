import { atom, selector, selectorFamily, useRecoilValue, useResetRecoilState } from 'recoil';
import axios from 'axios';

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

export const modalState = atom({
  key: 'modalState',
  default: false,
})

export const modalLState = atom({
  key: 'modalLState',
  default: false,
})

export const challsModalState = atom({
  key: 'challsModalState',
  default: false,
})

export const challsListState = atom({
  key: 'challsListState',
  default: [],
})

export const challIdState = atom({
  key: 'challIdState',
  default: [],
})

export const challTitleState = atom({
  key: 'challTitleState',
  default: [],
})

export const challPointState = atom({
  key: 'challPointState',
  default: [],
})

export const challCategoryState = atom({
  key: 'challCategoryState',
  default: [],
})

export const challDescState = atom({
  key: 'challDescState',
  default: [],
})

export const challFlagState = atom({
  key: 'challFlagState',
  default: [],
})

export const challFileState = atom({
  key: 'challFileState',
  default: '',
})
export const challLinkState = atom({
  key: 'challLinkState',
  default: '',
})

export const solvedState = atom({
  key: 'solvedState',
  default: [''],
})

export const loggedState = atom({
  key: 'loggedState',
  default: [],
})
export const tokenState = atom({
  key: 'tokenState',
  default: '',
})

export type RegisterProps = {
  id: string;
  pw: string;
  name: string;
};

export function Reset() {
  const resetId = useResetRecoilState(idState);
  const resetPw = useResetRecoilState(pwState);
  return {
    resetId,
    resetPw,
  };
}
export async function submitState(id: any, pw: any, csrfToken: any) {
  const response: any = await axios.post('api/users/login', {
    email: id,
    password: pw,
  }, {
    headers: {
      "xsrf-token": csrfToken,
    },
  });
  return response.data;
}

export async function logoutState() {
  const response: any = await axios.get('api/users/logout');
  return response.data;
}

export async function registerState(id: string, pw: string, name: string, csrfToken: string) {
  const response: any = await axios.post('api/users/register', {
    email: id,
    password: pw,
    name: name,
  }, {
    headers: {
      "xsrf-token": csrfToken,
    },
  });
  return response.data;
}

export async function authenticationState() {
  const response: any = await axios.post('api/users/auth');
  return response.data;
}

export async function challengesState() {
  const response: any = await axios.get('api/users/challs');
  return response.data;
}

export const challengesSelector = selector({
  key: 'challengesSelector',
  get: async() => {
    const response: any = await axios.get('api/users/challs')
    return response.data;
  }
})

export const authenticationSeletor = selector({
  key: 'authenticationSeletor',
  get: async() => {
    const response: any = await axios.post('api/users/auth');
    return response.data;
  },
  set: ({ set }, newValue) => {
    set(solvedState, newValue);
  }
});

export const submitUserIdSelector = selectorFamily({
  key: 'submitUserIdSelector',
  get: (userId: any) => async() => {
    const challId = useRecoilValue(challIdState);
    const response: any = await axios.post(`api/users/submit/${userId}`, {
      solved: challId
    });
    return response.data;
  },
})

export const userListsSelector = selector({
  key: 'userListsSelector',
  get: async() => {
    const response: any = await axios.post('api/users/list');
    return response.data;
  }
})

export async function userListsState() {
  const response: any = await axios.post('api/users/list');
  return response.data;
} 
export async function userLoggedState() {
  const response: any = await axios.post('api/users/logged');
  return response.data;
}

export async function csrfTokenState() {
  const response: any = await axios.get('api/token');
  return response.data;
}

export const csrfTokenSelector = selector({
  key: 'csrfTokenSelector',
  get: async() => {
    const response: any = await axios.get('api/token');
    return response.data;
  }
})