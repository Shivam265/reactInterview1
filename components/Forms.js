import React, { Component } from 'react'

export class Forms extends Component {
    constructor(props){
        super(props);
        this.state={
            username: "",
            address:""
      }
    }

    handleUsername=(event)=>{
        this.setState({
           username:event.target.value
    })
}

    handleAddress=(event)=>{
        this.setState({
            address:event.target.value
        })
   }

   handleSubmit=(event)=>{
    alert(`${this.state.username} ${this.state.address}`)
    event.preventDefault()// form submit button all detail show

   }
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
      <div>
      <label>username</label>
      <input type="text" value={this.state.username} onChange={this.handleUsername}></input><br/>

      <label>Address</label>
      <textarea  value={this.state.address} onChange={this.handleAddress}></textarea>
        
      </div>
      <button>Submit</button>
      </form>
    )
  }
}

export default Forms;
