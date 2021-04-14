import React from 'react';
import { useHistory, useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
const Home = (props: any) => {
  const history = useHistory();
  const location = useLocation();
  const params = useParams();
  const onClick = () => {
    axios.get('/api/users/logout').then((res) => {
      if (res.data.success) {
        history.push('/signin');
      } else {
        alert('failed...');
      }
    });
  };
  // console.log(history);
  // console.log(location);
  // console.log(parmas);
  return (
    <div className='logout'>
      <button onClick={onClick}>Logout</button>
    </div>
  );
};

export default withRouter(Home);
