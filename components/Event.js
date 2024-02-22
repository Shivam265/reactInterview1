import React from 'react'

function Event() {
    function changeEvent(){
        console.log("hello:Event handling")

    }
  return (
    <div>
    <button onClick={changeEvent}>Click</button>
      
    </div>
  )
}

export default Event
