// UseMemo in value store cache 
import React, { useMemo, useState } from 'react'

function UseMemo() {

    const [counterOne,setcounterOne] = useState(0);
    const [counterTwo,setcounterTwo] = useState(0)


    const IncrementOne=() => {
        setcounterOne(counterOne + 1)

    }

    const IncrementTwo = () => {
        setcounterTwo(counterTwo + 1)


    }

    /* The useMemo Hook only runs when one of its dependencies update.*/

    const isEven = useMemo(() =>{
        console.warn("........")
        let i = 0 ;
        while(i<200000000) i++;
        return counterOne%2===0
    },[counterOne])


  return (
    <div>
    <button onClick={IncrementOne}>counterOne {counterOne}</button>
    <span>{isEven?"Event":"Odd"}</span>
   
    <button onClick={IncrementTwo}>IncrementTwo{counterTwo}</button>
      
    </div>
  )
}

export default UseMemo
