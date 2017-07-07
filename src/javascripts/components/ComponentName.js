import React from 'react'

class ComponentName extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <label>
        Component Name
        <div className="form-control">
          <input
            type="text"
            value={this.props.name}
            onChange={this.props.onChange}
          />
        </div>
      </label>
    )
  }
}

export default ComponentName
