import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../static/home.scss';
import Navbar from '../Nav';
import Menu from '../menu';
import ChallengeProbs from './challengeProbs';

const Challenges = (props: any) => {
  return (
    <>
      <Menu />
      <Navbar />
      <ChallengeProbs />
    </>
  );
};

export default withRouter(Challenges);
