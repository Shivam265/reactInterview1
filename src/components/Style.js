import React from 'react'
import './Style.css';

function Style(props) {
    let className = props.isvalue ? 'demo':'demo1';
  return (
    <div>
    <h1 className= {`${className} demo2`}>hello style component</h1>
      
    </div>
  )
}

export default Style;
