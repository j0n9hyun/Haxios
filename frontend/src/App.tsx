import React, { Suspense } from 'react';
import Signup from './components/signup/signup';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/home';
import { RecoilRoot } from 'recoil';
import Signin from './components/signin/signin';
import Auth from './components/auth/authRoute';
function App() {
  return (
    // <Router>
    <Switch>
      <RecoilRoot>
        <Suspense fallback='loading'>
          <Route path='/' exact component={Home} />
          <Route path='/signin' component={Signin} />
          <Route path='/signup' component={Signup} />
        </Suspense>
      </RecoilRoot>
    </Switch>
    // </Router>
  );
}

export default App;
