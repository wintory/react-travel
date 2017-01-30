import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import { Header, Body } from './components'

export default (history) => (
  <Router history={history}>
    <Route path='/' component={Header}>
      <IndexRoute component={Body}/>
    </Route>
  </Router>
)
