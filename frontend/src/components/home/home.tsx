import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
const Home = (props: any) => {
  const history = useHistory();
  const onClick = () => {
    axios.get('/api/users/logout').then((res) => {
      if (res.data.success) {
        history.push('/signin');
      } else {
        alert('failed...');
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
