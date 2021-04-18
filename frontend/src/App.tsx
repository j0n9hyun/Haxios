import React, { Suspense } from 'react';
import Signup from './components/signup/signup';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/home';
import { RecoilRoot } from 'recoil';
import Signin from './components/signin/signin';
import Auth from './components/hoc/auth';

function App() {
  return (
    <Router>
      <Switch>
        <RecoilRoot>
          <Suspense fallback='loading'>
            <Route path='/' exact component={Auth(Home, true)} />
            <Route path='/signin' exact component={Auth(Signin, false)} />
            <Route path='/signup' exact component={Auth(Signup, false)} />
          </Suspense>
        </RecoilRoot>
      </Switch>
    </Router>
  );
}

export default App;
