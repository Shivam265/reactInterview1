import React, { Component } from 'react'

class List extends Component{
    constructor(props){
        super(props);
        //this.changeEvent = this.changeEvent.bind(this);


        // initial state 


        this.state = {
            course:"mca",
            roll:this.props.roll
        }

        
    }
    changeEvent = () =>{

        // update state

        this.setState({
            course:"bca"
        })



        console.log("hello rohit",this.props.roll)
    }
    render(){

        const numbers = [3,4,5,6];
        const newNumbers = numbers.map(function(numbers){ 
            console.log(numbers)
            return <li>{numbers}</li>
            


        })

        console.log(newNumbers)
      return (
         <div>
         {/* evenet handing*/}
            <button onClick={this.changeEvent}>hit me</button>
            {this.props.roll}
            <ul>{newNumbers}</ul>
         </div>
  )
    }

}

export default List;
