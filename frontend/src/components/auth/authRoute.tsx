import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const AuthRoute = () => {
  useEffect(() => {
    const apiCall = async () => {
      const response = await axios.get('api/users/auth').then((res) => {
        console.log(res);
      });
    };
    apiCall();
  });
  return <div>asd</div>;
};

export default AuthRoute;
