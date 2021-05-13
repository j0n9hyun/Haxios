import React, { Suspense } from 'react';
import Navbar from '../Nav';
import Menu from '../menu';
import '../../static/rank.scss';
import RankUsers from './rankUsers';
import Loading from '../hoc/loading';
import { withRouter } from 'react-router';
import { Helmet } from 'react-helmet-async';
const Rank = () => {
  return (
    <>
      <Helmet>
        <title>Haxios - Ranking</title>
      </Helmet>
      <Menu />
      <Navbar />
      <div className='rank-wrapper'>
        <div className='rank-table'>
          <Suspense fallback={<Loading />}>
            <RankUsers />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default withRouter(Rank);
