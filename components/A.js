import React, { Component } from 'react'
import B from './B';
import C from './C';
import  {Provider} from "react"
//UseContext data fetch in two value use {provider,consumer} provider in sender and consumer in reciever
export const mycontext = React.createContext();

export  class A extends Component {
    state ={
        name:"Rohit kumar",
        roll:44
    }

    handleClickContext=()=>{
        this.setState({roll:this.state.roll+1})
    }
  render() {

    const contextValue = {
        data:this.state,
        handlecheck:this.handleClickContext
    }
    return (
      <div>
      <h1>Component A</h1>
      <Provider value ={contextValue}>
      <B/>
      <C/>
      </Provider>
      
        
      </div>
    )
  }
}
