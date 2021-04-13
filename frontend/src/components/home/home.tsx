import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
const Home = (props: any) => {
  const history = useHistory();
  const onClick = () => {
    axios.get('http://localhost:5000/api/users/logout').then((res) => {
      console.log(res.data);
      if (res.data.success === true) {
        history.push('/login');
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

export default Home;
