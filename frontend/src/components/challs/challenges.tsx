import React, { Suspense } from 'react';
import { withRouter } from 'react-router-dom';
import '../../static/home.scss';
import Navbar from '../Nav';
import Menu from '../menu';
import ChallengeProbs from './challengeProbs';
import Loading from '../hoc/loading';

const Challenges = (props: any) => {
  return (
    <>
      <Menu />
      <Navbar />
      <Suspense fallback={<Loading />}>
        <ChallengeProbs />
      </Suspense>
    </>
  );
};

export default withRouter(Challenges);
