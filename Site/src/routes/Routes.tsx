import React, { Children } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from '../pages/about/about'
import Home from '../pages/home/home'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About}/>
      </Switch>
    </Router>
  )
}

export default Routes