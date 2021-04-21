import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  isLoginState,
  authenticationSeletor,
  modalLState,
} from '../atoms/authState';
/* 
null: everyone,
true: only logged in
false: only not logged in
*/
export default function Auth(
  SpecificFunction: any,
  option: boolean | null,
  adminRoute: number | null = null
) {
  function Authentication() {
    const history = useHistory();
    const setIsLogin = useSetRecoilState(isLoginState);
    const [modalIsOpenL, setModalIsOpenL] = useRecoilState(modalLState);
    const { isAuth, isAdmin } = useRecoilValue(authenticationSeletor);

    useEffect(() => {
      if (!isAuth) {
        setIsLogin(false);
        if (option) {
          setModalIsOpenL(!modalIsOpenL);
          history.push('/');
          console.log('option: true');
        }
      } else {
        setIsLogin(true);
        if (adminRoute && !isAdmin) {
          history.push('/login');
          console.log('admin');
        } else {
          if (option === false) {
            console.log('option: false');
            history.push('/');
          }
        }
      }
    }, []);
    return <SpecificFunction />;
  }
  return Authentication;
}
