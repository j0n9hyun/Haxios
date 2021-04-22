import React, { useEffect, useState } from 'react';
import { Link, useHistory, useLocation, withRouter } from 'react-router-dom';
import title from '../../static/haxios.svg';
import '../../static/home.scss';
import '../../static/font/css/all.css';

const Menu = () => {
  const history = useHistory<any>();
  const { pathname } = useLocation();
  const onClickHome = (e: any) => {
    history.push('/');
  };
  const onClickChalls = (e: any) => {
    history.push('/challs');
  };

  const onClickRank = (e: any) => {
    history.push('/rank');
  };

  return (
    <>
      <div className='home-container'>
        <div className='home-sidebar mini'>
          <div className='title-wrapper'>
            <img src={title} alt='' />
          </div>
          {/* <div className='home-sidemenu'> */}
          <div className='home-category'>
            <ul>
              <li
                className={pathname === '/' ? 'active' : ''}
                onClick={onClickHome}
              >
                <i className='fas fa-home' /> Home
              </li>

              <li
                className={pathname === '/challs' ? 'active' : ''}
                onClick={onClickChalls}
              >
                <i className='fas fa-cube' /> Challenge
              </li>
              <li
                className={pathname === '/rank' ? 'active' : ''}
                onClick={onClickRank}
              >
                <i className='fas fa-medal' /> Ranking
              </li>
            </ul>
          </div>

          <div className='copyright'>
            <div className='copyright-text'>
              ⓒ 2021. j0n9hyun all rights reserved.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Menu);
