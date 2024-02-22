import React, { useMemo, useState } from 'react'
// useMemo use in application performance increase and return value 
function UseMemo(props) {
    const [counterOne,setCounterOne] = useState(0);
    const [ counterTwo,setCounterTwo] = useState(0);

    const IncrementOne=()=>{
        setCounterOne(counterOne + 1)
    }

    const IncrementTwo=()=>{
        setCounterTwo(counterTwo + 1)

    }

    const isEven = useMemo(()=>{
        console.warn("......")
        let i = 0;
        while(i<20000000) i++;
        return counterOne%2===0
    },[counterOne])

    
  return (
    <div>
    <button onClick={IncrementOne}>CounterOne - {counterOne}</button>
    <span>{isEven ? "Even":"Odd"}</span>
    <button onClick={IncrementTwo}>CounterTwo - {counterTwo}</button>
      
    </div>

  )
}


export default UseMemo;
