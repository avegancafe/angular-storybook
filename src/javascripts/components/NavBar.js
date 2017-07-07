import React from 'react'
import { Div } from 'glamorous'

const menuItem = (text, fun, styles = { cursor: 'pointer' }) => {
  if (fun) {
    styles.userSelect = 'none'
  }
  return (
    <Div style={{ ...styles }} onClick={fun}>
      {text}
    </Div>
  )
}

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  logSomething() {
    console.log('')
    console.log(
      '%cVTS! VTS! VTS!',
      'color: red; font-family: sans-serif; font-size: 8.5em; font-weight: bolder; text-shadow: #000 1px 1px;'
    )
  }

  render() {
    return (
      <Div backgroundColor="#D7DDE3" className="u-p-2x">
        {menuItem('Angular Storybook', this.logSomething)}
      </Div>
    )
  }
}

export default NavBar
