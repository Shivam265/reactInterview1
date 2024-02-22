/* useRef is a Hook in React that provides a way to create mutable object properties that persist across renders without causing the component to re-render when the value changes. Unlike state (useState), changes to the ref object do not trigger a re-render */

// useRef current value not re-render and useState current value re-render 
import React, { useState,useRef } from 'react'

function Useref() {
    const[first,setfirst]  =useState(0)

    const inputRef = useRef(0);
    console.log(inputRef.current);

    function stateInc(){
        setfirst(first +1 )
        console.log(first)

    }

    /* You can use useRef to get references to DOM elements and interact with them directly.
    // Focus on the input element when the component mounts */

    function refInc(){
        inputRef.current = inputRef.current+1
        console.log(inputRef.current)


    }
  return (
    <div>
    <h1>ref{inputRef.current}</h1>
    <h1>state{first}</h1>
    <button onClick={stateInc}>stateInc</button>
    <button onClick={refInc}>refInc</button>
      
    </div>
  )
}

export default Useref
