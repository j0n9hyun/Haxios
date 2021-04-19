import React from 'react';
import { Link } from 'react-router-dom';
import title from '../../static/haxios.svg';
import '../../static/home.scss';

const Menu = () => {
  return (
    <>
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
      </div>
    </>
  );
};

export default Menu;
