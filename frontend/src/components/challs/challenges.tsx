import React, { useEffect, useRef } from 'react';
import { Link, useHistory, withRouter } from 'react-router-dom';
import { logoutState } from '../atoms/authState';
import title from '../../static/haxios.svg';
import '../../static/home.scss';
const Challenges = (props: any) => {
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

  const onClickChalls = (e: any) => {
    history.push('/challs');
  };

  return (
    <div className='home-container'>
      <div className='home-sidebar'>
        <div className='title-wrapper'>
          <img src={title} alt='' />
        </div>
        <div className='home-sidemenu'>
          <div className='home-category'>
            <ul>
              <Link to='/'>
                <li className=''>Home</li>
              </Link>
              <Link to='/challs'>
                <li className='active'>Challenges</li>
              </Link>
              <li>Ranking</li>
            </ul>
          </div>
        </div>
        <div className='copyright'>ⓒ 2021. j0n9hyun all rights reserved.</div>
      </div>
      {/* <div className='logout'>
        <figure style={{ marginTop: '20px' }}>
          <img src={title} alt='' />
        </figure>
        <button onClick={onClick}>Logout</button>
      </div> */}
    </div>
  );
};

export default withRouter(Challenges);
