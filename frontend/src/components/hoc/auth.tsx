import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { authenticationState } from '../atoms/authState';
import Loading from './loading';
export default function Auth(
  SpecificFunction: any,
  option: boolean | null,
  adminRoute: number | null = null
) {
  function Authentication() {
    const history = useHistory();
    useEffect(() => {
      authenticationState().then((res: any) => {
        console.log(res);
        if (!res.isAuth) {
          if (option) {
            history.push('/signin');
            console.log('option: true');
          }
        } else {
          if (adminRoute && !res.isAdmin) {
            history.push('/signin');
            console.log('adminRoute ! resadmin');
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
