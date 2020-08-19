import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Routes from './routes'

const browserHistory = createBrowserHistory()

const App = () => {
  return (
    <Router history={browserHistory}>
      <Routes />
    </Router>
  )
}

export default App
