import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Error404, Login, MyPage, Service, Signup } from './pages'
import PrivateRoute from './PrivateRoute'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Service />
        </Route>
        <Route exact path="/sign-up">
          <Signup />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/mypage/order" component={MyPage} />
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
