import React,{memo} from 'react'

function CallbackC({counterTwo,setcounterTwo}) {
    console.log("child component render")
  return (
    <div>
    <h1>Child component</h1>
      
    </div>
  )
}

export  default  memo(CallbackC);
