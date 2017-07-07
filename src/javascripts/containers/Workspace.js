import React from 'react'
import { Div } from 'glamorous'
import glamor from 'glamor'
import _ from 'lodash'

window.glamor = glamor
window._ = _
window.fetched = []

import ComponentName from '@components/ComponentName'

class Workspace extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      componentName: 'div',
      htmlName: 'div',
    }
  }

  componentDidMount() {
    const oldName = localStorage.getItem('componentName')
    this.handleNameChange({
      target: {
        value: oldName != '' ? oldName : 'div',
      },
    })
  }

  handleNameChange(e) {
    this.setState({
      componentName: e.target.value,
      htmlName: _.kebabCase(e.target.value),
    })
    localStorage.setItem('componentName', e.target.value)
  }

  scriptUrl() {
    return `/static/assets/angular/${this.state.htmlName}-component.js?${Math.random()}`
  }

  injectScript() {
    // remove scripts
    const container = document.getElementById('script-container')
    const script = document.createElement('script')
    script.src = this.scriptUrl()
    const scripts = document.querySelectorAll('#script-container script')
    for (const script of scripts) {
      try {
        container.removeChild(script)
      } catch (e) {}
    }

    // remove other custom components
    const compContainer = document.querySelector('.storybook-component')
    const comps = document.querySelectorAll('.storybook-component *')

    for (const comp of comps) {
      try {
        compContainer.removeChild(comp)
      } catch (e) {}
    }

    // add script on
    container.appendChild(script)
  }

  render() {
    let placeholder
    if (_.includes(['div', ''], this.state.componentName)) {
      placeholder = 'Declare your component name to get started...'
    }
    const child =
      this.state.componentName.length && this.state.componentName != 'div'
        ? <div className="storybook-component" />
        : <Div fontSize='32px'>
            {placeholder}
          </Div>
    setTimeout(() => this.injectScript())
    return (
      <Div
        height="calc(100vh - 50px)"
        className="u-p-2x ng-app"
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <div id="script-container" />
        <Div
          position="absolute"
          top="20px"
          left="50%"
          transform="translateX(-50%)"
          maxWidth="1000px"
          width="40%"
        >
          <ComponentName
            onChange={this.handleNameChange.bind(this)}
            name={this.state.componentName}
          />
        </Div>
        {child}
      </Div>
    )
  }
}

export default Workspace
