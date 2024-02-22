import React, { Component } from 'react'
import Testing from './Testing';

class State extends Component{

    state = {
        users:[
            {id:1,name:"rohit",class:"A"},
            {id:2,name:"sohit",class:"B"},

        ]
    }
    constructor(props){
        super(props);
        //this.changeEvent = this.changeEvent.bind(this);


        this.state = {
            course:"mca",
            roll:this.props.roll
        }

        
    }
    changeEvent = () =>{

        this.setState({
            course:"bca"
        })



        console.log("hello rohit",this.props.roll)
    }
    render(){

        const users = this.state.users.map((user) => {
            return(
                /*<h1 key = {user.id}>{user.id}
                {user.name}
                {user.class}
                </h1>*/
                <Testing key = {user.id} value={user.id}></Testing>
            )
        
           

        })
       

        const numbers = this.props.numbers
        // const newNumbers = numbers.map((numbers) =>{ return <li>{numbers}</li>
            //console.log(numbers)
            


        //})
      return (
         <div>
         {/* evenet handing*/}
            <button onClick={this.changeEvent}>hit me</button>
            {this.props.roll}
            <h2>{users}</h2>
            


            <ul>
            {
                numbers.map((numbers) => <li key = {numbers}></li> )
            }

            </ul>
         </div>
  )
    }

}

export default State;