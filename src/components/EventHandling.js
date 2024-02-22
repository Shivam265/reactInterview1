import React from 'react'

function EventHandling() {
    function button (e){
        e.preventDefault();
        console.log("welcome everyone guys")
    }
  return (
    <div>

    <button onClick={button}>Submit</button>
    <h1>thanks </h1>
      
    </div>
  )
}


export default EventHandling;

