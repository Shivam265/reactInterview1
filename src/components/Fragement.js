/* In React, a fragment is a way to group multiple elements without introducing an additional parent container in the HTML output. Fragments are particularly useful when you want to return multiple elements from a component without wrapping them in a div or another container element.*/

import React from 'react'

function FunctionClick() {
    function changeEvent(e){
        e.preventDefault();
        console.log("helo event handing")
    }
     return (
    <React.Fragment>
        <a href = "https://www.google.com" onClick={changeEvent}>Click me</a>
    </React.Fragment>
  )
}

export default FunctionClick;
