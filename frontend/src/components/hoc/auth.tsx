import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
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
          if (option) {
            history.push('/login');
            console.log('option: true');
          }
        } else {
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
