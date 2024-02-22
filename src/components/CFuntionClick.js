import React, { Component } from 'react'

class CFuntionClick extends Component{
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
      return (
         <div>
         {/* evenet handing*/}
            <button onClick={this.changeEvent}>hit me</button>
            {this.props.roll}
           
         </div>
  )
    }

}

export default CFuntionClick;
