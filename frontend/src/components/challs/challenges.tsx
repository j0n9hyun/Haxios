import React, { Suspense } from 'react';
import { withRouter } from 'react-router-dom';
import '../../static/home.scss';
import Navbar from '../Nav';
import Menu from '../menu';
import ChallengeProbs from './challengeProbs';
import Loading from '../hoc/loading';
import ChallengesFiltering from './challengesFiltering';

const Challenges = (props: any) => {
  return (
    <>
      <Menu />
      <Navbar />
      <Suspense fallback={<Loading />}>
        <ChallengesFiltering />
        <ChallengeProbs />
      </Suspense>
    </>
  );
};

export default withRouter(Challenges);
