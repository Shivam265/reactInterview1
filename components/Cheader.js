//import {React} is component
import React from 'react'  

class Cheader extends React.Component{
    render(){
        return(
        <div>{/*// props {property} used in component in propery recieve value and props not value immutable(change)// */}
            <h1>Hello class component {this.props.name}</h1>
        </div>
        )
    }
}

export default Cheader;