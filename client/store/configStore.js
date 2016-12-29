import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

export default (history) => {
  const isDev = process.env.NODE_ENV === 'development'
  const isOpenDevTools = isDev && window.devToolsExtension

  const middlewares = [thunk, routerMiddleware(history)]
  const store = createStore(rootReducer, compose(
    applyMiddleware(thunk),
    isOpenDevTools ? window.devToolsExtension() : f => f
  ))

  if(module.hot){
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
