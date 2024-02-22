import React,{memo} from 'react'

const Childcall= (counterTwo,setCounterTwo)=> {
    console.log('child component render')
  return (
    <div>
    <h1>child components</h1>
      
    </div>
  )
}

export default memo(Childcall);
