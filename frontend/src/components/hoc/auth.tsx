import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { authenticationState } from '../atoms/authState';

export default function Auth(
  SpecificFunction: any,
  option: boolean | null,
  adminRoute: number | null = null
) {
  function Authentication() {
    const history = useHistory();
    useEffect(() => {
      authenticationState().then((res: any) => {
        if (!res.isAuth) {
          if (option === false) {
            history.push('/signin');
          } else {
            if (option === true) {
              history.push('/signin');
            }
          }
        }
      });
    }, []);
    return <SpecificFunction />;
  }
  return Authentication;
}
