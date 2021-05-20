import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/home';
import { RecoilRoot } from 'recoil';
import Auth from './components/hoc/auth';
import Loading from './components/hoc/loading';
import Profile from './components/profile/profile';
import Rank from './components/ranking/rank';
import Challenges from './components/challs/challenges';
import Management from './components/manage';
import { HelmetProvider } from 'react-helmet-async';
import NoMatch from './components/errors/NoMatch';

function App() {
  return (
    <HelmetProvider>
      <RecoilRoot>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path='/' exact component={Auth(Home, null)} />
            <Route path='/profile' exact component={Auth(Profile, true)} />
            <Route path='/rank' exact component={Auth(Rank, true)} />
            <Route path='/challs' exact component={Auth(Challenges, true)} />
            <Route path='/admin' exact component={Auth(Management, true, 1)} />
            <Route component={NoMatch} />
          </Switch>
        </Suspense>
      </RecoilRoot>
    </HelmetProvider>
  );
}

export default App;
