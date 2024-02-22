import React, { useEffect, useState } from 'react'

const  CustomH = () => {
    const [count,setCount] = useState(0);
    
  return (
    <div>
    <h1>Custom hooks</h1>
    <button onClick={()=>setCount(count+1)}>click</button>
      
    </div>
  )
}

export default CustomH
