import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import { createStore, applyMiddleware, compose } from 'redux'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import ReduxThunk from 'redux-thunk'
import rootReducer from './reducers'
import App from './App.js'

const isOpenDevTools = process.env.NODE_ENV === 'development' && window.devToolsExtension
const middlewares = [ReduxThunk,routerMiddleware(browserHistory)]
const rootEl = document.getElementById('app')

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
    isOpenDevTools ? window.devToolsExtension() : f => f
  )
)

const history = syncHistoryWithStore(browserHistory, store)

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextReducer = require('./reducers').default
    store.replaceReducer(nextReducer)
  })
}

render(
  <Provider store={store}>
    <App history={history}/>
  </Provider>
  , rootEl);
