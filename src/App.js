import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'
import MainNavigation from './shared/components/Navigation/MainNavigation'
import Users from './users/pages/Users'
import NewPlace from './places/pages/NewPlace'

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path='/' component={Users} exact />
          <Route path='/places/new' component={NewPlace} exact />
          <Redirect to='/' />
        </Switch>
      </main>
    </Router>
  )
}

export default App
