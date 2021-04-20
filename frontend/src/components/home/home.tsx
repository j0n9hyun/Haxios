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
    </>
  );
};

export default withRouter(Home);
