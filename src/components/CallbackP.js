/* The useCallback and useMemo Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.*/

// This can improve performance.and UsecallBack store in function all  store cache v 
import React, {useCallback, useState}from 'react'
import CallbackC from './CallbackC';


function CallbackP() {
    const [counterOne,setcounterOne] = useState(0);
    const [counterTwo,setcounterTwo] = useState([]);

    const IncrementOne = ()=>{
        setcounterOne(counterOne + 1)
    

    }

    const fun = useCallback (() =>{
        console.log("helo rohit")
    },counterTwo)



  return (
    <div>
   <CallbackC  counterTwo = {counterTwo} fun  = {fun}/>
    <button onClick={IncrementOne}>CounterOne - {counterOne}</button>
      
    </div>
  )
}

export default CallbackP;
