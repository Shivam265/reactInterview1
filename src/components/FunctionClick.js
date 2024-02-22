import React from 'react'

function FunctionClick() {
    function changeEvent(e){
        e.preventDefault();
        console.log("helo event handing")
    }
     return (
    <div>
        <a href = "https://www.google.com" onClick={changeEvent}>Click me</a>
    </div>
  )
}

export default FunctionClick;
