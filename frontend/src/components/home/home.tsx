import React, { useEffect } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import { logoutState } from '../atoms/authState';
import title from '../../static/title.svg';
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
      <figure style={{ marginTop: '20px' }}>
        <img src={title} alt='' />
      </figure>
      <button onClick={onClick}>Logout</button>
    </div>
  );
};

export default withRouter(Home);
