import React from 'react';
import Signup from './components/signup/signup';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/home';
import { RecoilRoot } from 'recoil';
import Signin from './components/signin/signin';
function App() {
  return (
    <Router>
      <Switch>
        <RecoilRoot>
          <Route path='/' exact component={Home} />
          <Route path='/signin' component={Signin} />
          <Route path='/signup' component={Signup} />
        </RecoilRoot>
      </Switch>
    </Router>
  );
}

export default App;
