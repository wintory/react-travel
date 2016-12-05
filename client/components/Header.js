import React, { PropTypes } from 'react'

class Header extends React.Component {
  render () {
    return (
      <div>
        <h1>Hello World</h1>
        {this.props.children}
      </div>
    )
  }
}

export default Header
