import React, { Suspense } from 'react';
import Navbar from '../Nav';
import Menu from '../menu';
import '../../static/rank.scss';
import RankUsers from './rankUsers';
import RankTrophy from './rankTrophy';
import Loading from '../hoc/loading';

const Rank = () => {
  return (
    <>
      <Menu />
      <Navbar />
      <div className='rank-wrapper'>
        <div className='rank-table'>
          <Suspense fallback={<Loading />}>
            <RankTrophy />
            <RankUsers />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Rank;
