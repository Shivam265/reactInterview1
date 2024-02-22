import React, { Component } from 'react'
//import C from './C'
//import {myContext} from './A'

import { Consumer } from './contect'

export class B extends Component {
  render() {
    return (
      <div>
      <div>Component B</div>

      <Consumer>
        {
            ({data,handlecheck}) => (
                <div>
                    <h3>
                    {data.roll},{data.name}
                        <button onClick={handlecheck}>Change roll number</button>
                    </h3>
                </div>
            )
        }
      </Consumer>
      {/*<myContext.Consumer>{data => <h3>{data.name}</h3>}</myContext.Consumer>*/}
      {/*<C name = {this.props.name}></C>*/}
        
      </div>
    )
  }
}

export default B
