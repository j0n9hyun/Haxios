import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useRecoilState } from 'recoil';
import { authenticationState, isLoginState } from '../atoms/authState';
export default function Auth(
  SpecificFunction: any,
  option: boolean | null,
  adminRoute: number | null = null
) {
  function Authentication() {
    const history = useHistory();
    const [isLogin, setIsLogin] = useRecoilState(isLoginState);
    useEffect(() => {
      authenticationState().then((res: any) => {
        if (!res.isAuth) {
          setIsLogin(false);
          if (option) {
            history.push('/');
            console.log('option: true');
          }
        } else {
          setIsLogin(true);
          if (adminRoute && !res.isAdmin) {
            history.push('/login');
            console.log('asdasd');
          } else {
            if (option === false) {
              console.log('option: false');
              history.push('/');
            }
          }
        }
      });
    }, []);
    return <SpecificFunction />;
  }
  return Authentication;
}
