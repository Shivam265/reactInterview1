import React from 'react'
import './Style.css';

function StyleCss(props) {
    let className = props.isValue ? "demo":"demo1";
  return (
    <div>
    <h1 className={`${className} demo2`}>Helo style sheet</h1>

      
    </div>
  )
}

export default StyleCss;
