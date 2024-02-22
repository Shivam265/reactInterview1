import React from 'react'

const x = 5;

const myElement = <h1>{(x) > 10 ? "Hello" : "Goodbye"}</h1>;

 function TernaryOpr() {
  return (
    <div>
        <h1> hello ternary{myElement}</h1>
    </div>
  )
}

export default TernaryOpr;