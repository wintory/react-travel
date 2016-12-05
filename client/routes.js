import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Header, Body } from './components'

export default (store,history) => (
  <Router history={syncHistoryWithStore(history,store)}>
    <Route path='/' component={Header}>
      <IndexRoute component={Body} />
      <Route path='test' component={Body} />
    </Route>
  </Router>
)
