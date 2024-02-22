// useRef function reactjs//
import React,{useRef, useState} from 'react'
const Uncontrol=() =>{
    // it like a usestate only and hold the value no re-render
    /* It can be used to store a mutable value that does not cause a re-render when updated.
    It can be used to access a DOM element directly.*/
    const Rohitkumar= useRef(null)
    const [show ,setShow] = useState(false);
    const submitForm = (e) =>{
        e.preventDefault();
        const  name = Rohitkumar.current.value
        name  =  "" ? alert("pls fil the data"):setShow(true);
    }

  return (
    <div>
    <form action = "" onSubmit={submitForm}>
        <div>
            <label htmlFor = "Rohitkumar">Enter your name</label>
            <input type="text" id="Rohitkumar" ref={Rohitkumar}></input>
        </div>
        <br/>
        <button>Submit</button>
    </form>
    <p>{show ?  `you are luckey Rohit kumar ${Rohitkumar.current.value}`:""}</p>
      
    </div>
  )
}

export default Uncontrol
 