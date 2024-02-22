import React,{useState} from 'react'

export default function Hooks() {
    // useState accepts an initial state and returns two values:useState = initial state ,update state 
    //// The useState hook returns an array with two elements: the current state and a function to update the state.

    const [channelname,setname] = useState("Information technolgy")
    const [count,setcount] = useState("Subscriber")
    //const name = channelname[0];
    //const setname = channelname[1]

    const stateHandler = () =>{
        setname("rohit kumar")
        setcount("334455")

    }

  return (
    <div>
    {channelname}
    {count}
    <button onClick={stateHandler}>click here</button>

    </div>
  )
}
