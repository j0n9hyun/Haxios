import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/home';
import { RecoilRoot } from 'recoil';
import Auth from './components/hoc/auth';
import Loading from './components/hoc/loading';
import Profile from './components/profile/profile';
import Rank from './components/ranking/rank';
import Challenges from './components/challs/challenges';
import Register from './components/signup/register';
import Login from './components/signin/login';

function App() {
  return (
    <Router>
      <Switch>
        <RecoilRoot>
          <Suspense fallback={<Loading />}>
            <Route path='/' exact component={Auth(Home, null)} />
            <Route path='/login' exact component={Auth(Login, false)} />
            <Route path='/register' exact component={Auth(Register, false)} />
            <Route path='/profile' exact component={Auth(Profile, true)} />
            <Route path='/rank' exact component={Auth(Rank, true)} />
            <Route path='/challs' exact component={Auth(Challenges, true)} />
          </Suspense>
        </RecoilRoot>
      </Switch>
    </Router>
  );
}

export default App;
