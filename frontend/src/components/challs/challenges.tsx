import React, { Suspense } from 'react';
import { withRouter } from 'react-router-dom';
import '../../static/home.scss';
import Navbar from '../Nav';
import Menu from '../menu';
import ChallengeProbs from './challengeProbs';
import Loading from '../hoc/loading';
import ChallengesFiltering from './challengesFiltering';
import { Helmet } from 'react-helmet-async';
const Challenges = (props: any) => {
  return (
    <>
      <Helmet>
        <title>Haxios - Challenges</title>
      </Helmet>
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
