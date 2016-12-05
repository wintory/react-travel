import React from 'react'
import { browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import configStore from './store/configStore'
import routes from './routes'

class App extends React.Component {
  render () {
    const store = configStore(browserHistory)
    return (
      <Provider store={store} key='provider'>
        {routes(store,browserHistory)}
      </Provider>
    )
  }
}

export default App
