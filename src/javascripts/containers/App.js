import React, { Component } from 'react'
import NavBar from '@components/NavBar'
import Workspace from '@containers/Workspace'
import { Div } from 'glamorous'

export default class App extends Component {
  render() {
    return (
      <Div fontSize="18px">
        <NavBar />
        <Workspace />
      </Div>
    )
  }
}
