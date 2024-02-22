// UseContect Hooks
/* useContext is a Hook in React that allows functional components to subscribe to a context without introducing a nested component tree. Context provides a way to pass data through the component tree without having to pass props down manually at every level*/
import React, { Component } from 'react'
import B from './B';
import C from './C';
// create UseContext
//export const myContext = React.createContext();
import { Provider } from './contect';
export class A extends Component {
    state = {
        name:"Rohit kumar",
        roll:44

    }

    handleClickContext = ()=>{
        this.setState({roll: this.state.roll+1})
    }
  render() {

    const contextValue = {
        data:this.state,
        handlecheck:this.handleClickContext,
    }
    return (
      <div>
      <h1>Component A</h1>
      //Create a component that provides the context value
      <Provider value = {contextValue}>
      <B/>
      <C/>

      </Provider>
      {/*<B name = {this.state.name}></B>*/}
        
      </div>
    )
  }
}

export default A
