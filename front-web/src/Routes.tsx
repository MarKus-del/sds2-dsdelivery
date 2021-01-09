import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import Orders from './Orders';

function Routes() {
  return(
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/orders" exact component={Orders}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;