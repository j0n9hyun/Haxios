import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import title from '../../static/haxios.svg';
import '../../static/home.scss';
import Navbar from '../Nav';
import Menu from '../menu';

const Home = () => {
  return (
    <>
      <Menu />
      <Navbar />
      <div className='rule-wrapper'>
        <div className='rule-title'>
          About<p>asdasdasdasdasdads</p>
        </div>
      </div>
    </>
  );
};

export default withRouter(Home);
