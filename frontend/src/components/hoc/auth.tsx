import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  authenticationState,
  isLoginState,
  testState,
} from '../atoms/authState';
export default function Auth(
  SpecificFunction: any,
  option: boolean | null,
  adminRoute: number | null = null
) {
  function Authentication() {
    const history = useHistory();
    const setIsLogin = useSetRecoilState(isLoginState);
    const [authentication, setAuthentication] = useRecoilState(testState);

    useEffect(() => {
      if (!authentication.isAuth) {
        setIsLogin(false);
        if (option) {
          history.push('/');
          console.log('option: true');
        }
      } else {
        setIsLogin(true);
        if (adminRoute && !authentication.isAdmin) {
          history.push('/login');
          console.log('asdasd');
        } else {
          if (option === false) {
            console.log('option: false');
            history.push('/');
          }
        }
      }
      // authenticationState().then((res: any) => {
      //   if (!res.isAuth) {
      //     setIsLogin(false);
      //     if (option) {
      //       history.push('/');
      //       console.log('option: true');
      //     }
      //   } else {
      //     setIsLogin(true);
      //     if (adminRoute && !res.isAdmin) {
      //       history.push('/login');
      //       console.log('asdasd');
      //     } else {
      //       if (option === false) {
      //         console.log('option: false');
      //         history.push('/');
      //       }
      //     }
      //   }
      // });
    }, []);
    return <SpecificFunction />;
  }
  return Authentication;
}
