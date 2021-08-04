import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Error404, Login, MyPage, Service, Signup } from './pages'

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
        <Route path="/mypage/order">
          <MyPage />
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
