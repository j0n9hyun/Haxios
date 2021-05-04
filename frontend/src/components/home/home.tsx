import React, { Suspense } from 'react';
import { withRouter } from 'react-router-dom';
import '../../static/home.scss';
import Navbar from '../Nav';
import Menu from '../menu';
import Loading from '../hoc/loading';
import Rules from './rules';

const Home = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Menu />
        <Navbar />
        <Rules />
      </Suspense>
    </>
  );
};

export default withRouter(Home);
