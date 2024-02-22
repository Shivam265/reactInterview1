import React  from 'react' 

class Channel extends React.Component{
    constructor(){
        super();
        this.state={
            msg: "Hello Information technology"
        }
    }

    Subscribe(){
        this.setState({
            msg: "thank for subscribing you tube channel"
        })

    }

  render(){
    return(
        <div>
    <h1>{this.state.msg}</h1>
    <button onClick={()=> { this.Subscribe() }}>Subscribe</button>
    </div>
    )
  }
}

export default Channel;
