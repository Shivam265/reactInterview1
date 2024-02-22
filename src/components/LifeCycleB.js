import React, { Component } from 'react'

export class LifeCycleB extends Component {
    constructor( props){
        super(props)
        this.state = {
            name:"rohit"
        }

        console.log("LifeCycleB: getDerivedStateFromProps")

           
        }

        static getDerivedStateFromProps(props,state){
            console.log("LifeCycleB: getDerivedStateFromProps")
            return null
        }

        // componentDidMount after run 
        componentDidMount(){
            console.log("LifeCycleB:  componentDidMount")
        }
    
  render() {
    console.log("LifeCycleB:  render")
    return (
      <div>
      LifeCycleB
        
      </div>
    )
  }
}

export default LifeCycleB
