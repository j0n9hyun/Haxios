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
            <Route path='/' exact component={Auth(Home, false)} />
            <Route path='/signin' component={Auth(Signin, null)} />
            <Route path='/signup' component={Auth(Signup, null)} />
          </Suspense>
        </RecoilRoot>
      </Switch>
    </Router>
  );
}

export default App;
