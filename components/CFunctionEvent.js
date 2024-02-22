import React, { Component } from 'react'

class CFunctionEvent extends Component {
    changeEvent(){
        console.log("hello ok ")
    }
  render() {
    return (
      <div>
      <button onClick={this.changeEvent}>Click  button</button>
        
      </div>
    )
  }
}

export default CFunctionEvent
