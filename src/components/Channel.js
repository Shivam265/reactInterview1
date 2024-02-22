import React from "react"

class Channel extends React.Component{
constructor(){
    super();
    this.state = {
        msg:"information technology channel"
    }

}

    subscribe(){
        // setState used in change value immutable 
        this.setState({
            msg:"thanks for Subscribe our you tube channel"
        })
    
}
render(){
    return(
        <div>
        <h1>{this.state.msg}</h1>
        <button onClick={() => {this.subscribe() }} >Subscribe</button>
        </div>
    )
}

}

export default Channel;