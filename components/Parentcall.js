import React, { useCallback, useState } from 'react'
import Childcall from './Childcall'
function Parentcall() {

const [counterOne,setCounterOne] = useState(0)
const [counterTwo,setCounterTwo] = useState([])


const IncrementOne=()=>{
    setCounterOne(counterOne + 1)
}

const func = useCallback (()=>{
    console.log("hello rohit")
},counterTwo);
  return (
    <div>
    <Childcall counterTwo = {counterTwo} func = {func} />
     <button onClick={IncrementOne}>Counter - {counterOne}</button>

      
    </div>
  )
}

export default Parentcall
