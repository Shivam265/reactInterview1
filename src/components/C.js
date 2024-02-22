import React, { Component } from 'react'
import { myContext } from './A'

export class C extends Component {
  render() {
    return (
      <div>
      <h1>C component</h1>
      <myContext.Consumer>{data => <h3>{data.roll}</h3>}</myContext.Consumer>
      {/*{this.props.name}*/}
        
      </div>
    )
  }
}

export default C
