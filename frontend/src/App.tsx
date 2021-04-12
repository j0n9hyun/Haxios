import React from 'react';
import Signup from './components/signup/signup';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/home';
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/signup' component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
