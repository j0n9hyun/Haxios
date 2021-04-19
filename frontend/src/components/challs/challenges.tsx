import React, { useEffect, useRef } from 'react';
import { Link, useHistory, withRouter } from 'react-router-dom';
import { logoutState } from '../atoms/authState';
import title from '../../static/haxios.svg';
import '../../static/home.scss';
import '../../static/challs.scss';
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
        <div className='challs-wrapper'>
          <div className='challs-box'>
            <div className='challs-title'>Buffer Overflow</div>
          </div>
          <div className='challs-box-correct'></div>
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
    </div>
  );
};

export default withRouter(Challenges);
