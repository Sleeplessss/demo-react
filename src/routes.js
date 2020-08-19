import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
// import NotFound from './components/NotFound'

const Routes = () => (
  // <Router {...props}>
  <Switch>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
  // </Router>
)

export default Routes
