import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

export class LifeCycleA extends Component {
    constructor( props){
        super(props)
        this.state = {
            name:"rohit"
        }

        console.log("LifeCycleA: getDerivedStateFromProps")

           
        }

        static getDerivedStateFromProps(props,state){
            console.log("LifeCycleA: getDerivedStateFromProps")
            return null
        }

        componentDidMount(){
            console.log("LifeCycleA:  componentDidMount")
        }
    
  render() {
    console.log("LifeCycleA:  render")
    return (
      <div>
      LifeCycleA
      <LifeCycleB></LifeCycleB>
        
      </div>
    )
  }
}

export default LifeCycleA
