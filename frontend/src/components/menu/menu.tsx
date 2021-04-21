import React, { useEffect, useState } from 'react';
import { Link, useHistory, useLocation, withRouter } from 'react-router-dom';
import title from '../../static/haxios.svg';
import '../../static/home.scss';

const Menu = () => {
  const history = useHistory<any>();
  const { pathname } = useLocation();
  const onClick = (e: any) => {
    history.push('/');
  };
  const onClick2 = (e: any) => {
    history.push('/challs');
  };

  return (
    <>
      <div className='home-container'>
        <div className='home-sidebar'>
          <div className='title-wrapper'>
            <img src={title} alt='' />
          </div>
          {/* <div className='home-sidemenu'> */}
          <div className='home-category'>
            <ul>
              <li
                className={pathname === '/' ? 'active' : ''}
                id='list'
                onClick={onClick}
              >
                Home
              </li>

              <li
                className={pathname === '/challs' ? 'active' : ''}
                id='list'
                onClick={onClick2}
              >
                Challenges
              </li>
              <li>Ranking</li>
            </ul>
          </div>

          <div className='copyright'>ⓒ 2021. j0n9hyun all rights reserved.</div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Menu);
