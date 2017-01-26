import React, { PropTypes } from 'react'
import routes from './routes'

class App extends React.Component {
  render () {
    return routes(this.props.history)
  }
}

export default App;
