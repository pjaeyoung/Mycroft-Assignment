import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

import { MyPageBody, Title } from '../../components'
import Layout from '../../layout'
import MyPageDetail from './Detail'

function MyPage() {
  let { path } = useRouteMatch()

  return (
    <Layout>
      <Switch>
        <Route exact path={path}>
          <Title text="마이페이지 화면" />
          <MyPageBody />
        </Route>
        <Route path={`${path}/:id`}>
          <MyPageDetail />
        </Route>
      </Switch>
    </Layout>
  )
}

export default MyPage
