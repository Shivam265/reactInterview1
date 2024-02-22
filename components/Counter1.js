import React, { useEffect } from 'react'

function Counter1({number}) {

    useEffect(()=>{
        console.log("function component updating ")

        return()=>{
            console.log("function component remove")
        }

    },[number])
  return (
    <div>
    <h1>{number}</h1>
    </div>
  )
}

export default Counter1;
