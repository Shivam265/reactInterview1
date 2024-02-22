import React,{useEffect} from 'react'

const UsetitleC=(props)=>{
    useEffect(()=>{
        document.title = props + "hits button"
    })
  return (
    <div>
      
    </div>
  )
}

export default UsetitleC

