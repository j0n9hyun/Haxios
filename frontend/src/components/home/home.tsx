import React, { useEffect } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import { logoutState } from '../atoms/authState';

const Home = (props: any) => {
  const history = useHistory();
  const onClick = () => {
    logoutState().then((res) => {
      if (res.success) {
        history.push('/signin');
      } else {
        alert('failed');
      }
    });
  };

  return (
    <div className='logout'>
      <button onClick={onClick}>Logout</button>
    </div>
  );
};

export default withRouter(Home);
