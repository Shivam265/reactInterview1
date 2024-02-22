import React, { Component } from 'react'

class Callback extends Component{
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

        const numbers = [3,4,5,6];
        // const newNumbers = numbers.map((numbers) =>{ return <li>{numbers}</li>
            //console.log(numbers)
            


        //})
      return (
         <div>
         {/* evenet handing*/}
            <button onClick={this.changeEvent}>hit me</button>
            {this.props.roll}
            <ul>
            {
                numbers.map((numbers) => <li>{numbers}</li> )
            }

            </ul>
         </div>
  )
    }

}

export default Callback;