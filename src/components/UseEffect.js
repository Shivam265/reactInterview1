import React, { useEffect, useState } from "react";

export default function Hooks() {
  // useState accepts an initial state and returns two values:useState = initial state ,update state

  const [channelname, setname] = useState("Information technolgy");
  const [count, setcount] = useState("Subscriber");
  const [counter, setcounter] = useState(0);
  const [counter1, setcounter1] = useState(0);
  //const name = channelname[0];
  //const setname = channelname[1]

  const stateHandler = () => {
    setname("rohit kumar");
    setcount("334455");
  };

  const Increment = () => {
    setcounter(counter + 1);
  };

  const Decrement = () => {
    setcounter1(counter1 - 1);
  };

  const Incremented = () => {
    for (let i = 0; i < 10; i++) {
      setcounter((prevCount) => prevCount + 1);
    }
  };

  /// This code will run after the component is rendered to the DOM
  // The useEffect hook is used to perform side effects after the component is rendered to the DOM.
  // useEffect used component in  first time render(insert),update,remove

  useEffect(() => {
    console.log("Rohit kumar");
  }, [counter, counter1]);

  return (
    <div>
      {channelname}
      {count}
      <button onClick={stateHandler}>click here</button>
      <button onClick={Increment}>Increment{counter}</button>
      <button onClick={Decrement}>Decrement{counter1}</button>
      <button onClick={Incremented}>Incremented by - 10{counter1}</button>
    </div>
  );
}
