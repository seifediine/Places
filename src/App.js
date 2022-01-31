import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'
import Users from './users/pages/Users'
import NewPlace from './places/pages/NewPlace'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Users} exact />
        <Route path='/places/new' component={NewPlace} exact />
        <Redirect to='/' />
      </Switch>
    </Router>
  )
}

export default App
