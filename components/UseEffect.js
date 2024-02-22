import React, {useEffect, useState } from "react";


const  UseEffect = ()=> {
    const [count,setcount] = useState(0);
    // use effect used re-render and before any  complete task and after(side Effect) every repeditly render useEffect 
    useEffect(()=>{
        document.title = `chats (${count})`


    });
  return (
    <div>
    <h1>{count}</h1>
    <button className="btn" onClick={
        () => setcount(count+1)
    }>Click</button>
      
    </div>
  );
}

export default UseEffect;
