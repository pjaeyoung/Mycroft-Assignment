import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import Layout from '../layout'
import MyPageDetail from './MyPageDetail'

function MyPage() {
  let { path } = useRouteMatch()

  return (
    <Layout>
      <Switch>
        <Route exact path={path}>
          <h1>This is MyPage</h1>
        </Route>
        <Route path={`${path}/:id`}>
          <MyPageDetail />
        </Route>
      </Switch>
    </Layout>
  )
}

export default MyPage
