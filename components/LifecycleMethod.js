import React, { Component } from 'react'
import Counter1 from './Counter1';



 class LifecycleMethod extends Component {

    constructor(){
        super();
        this.state={
            count:0
        }
    }
    componentDidMount(){
        console.log("componentDidMount: when first time loaded")
    }

    increment(){
        this.setState({count:this.state.count+1})
    }

    componentWillUnmount(){
        console.log("componnet remove")
    }

  render() {
    return (
      <div>
      
      <Counter1 number = {this.state.count}></Counter1>

      <button onClick={()=>{this.increment(this)}}>Click me</button>
        
      </div>
    )
  }
}
export default LifecycleMethod;
