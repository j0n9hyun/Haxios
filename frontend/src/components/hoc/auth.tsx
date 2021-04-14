import React, { useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

export default function init(
  SpecificFunction: any,
  option: any,
  adminRoute: any = null
) {
  function Authentication(props: any) {
    const history = useHistory();
    useEffect(() => {
      const Call = async () => {
        await axios.get('api/users/auth').then((res) => {
          console.log(res.data);
          if (!res.data.isAuth) {
            if (option === false) {
              history.push('/signin');
            } else {
              if (option === true) {
                console.log('로그인 화면으로 이동');
                history.push('/signin');
              }
            }
          }
        });
      };
      Call();
    }, []);
    return <SpecificFunction />;
  }
  return Authentication;
}
