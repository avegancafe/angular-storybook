import React from 'react'
import { Div } from 'glamorous'

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Div color={'red'}>
        <h1>Hello, VTS!</h1>
      </Div>
    )
  }
}

NavBar.propTypes = {
  // propTypes go here...
}

export default NavBar
