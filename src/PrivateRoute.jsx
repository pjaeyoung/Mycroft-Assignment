import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { storage } from './utils'

function PrivateRoute({ component: Component, exact, path }) {
  return (
    <Route
      exact={exact}
      path={path}
      render={(props) =>
        storage.getToken() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute
