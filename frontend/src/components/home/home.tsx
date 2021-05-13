import React, { Suspense } from 'react';
import { withRouter } from 'react-router-dom';
import '../../static/home.scss';
import Navbar from '../Nav';
import Menu from '../menu';
import Loading from '../hoc/loading';
import Rules from './rules';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Haxios - Home</title>
      </Helmet>
      <Suspense fallback={<Loading />}>
        <Menu />
        <Navbar />
        <Rules />
      </Suspense>
    </>
  );
};

export default withRouter(Home);
