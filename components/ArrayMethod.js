import React from 'react'

function ArrayMethod() {
    //map looping in array //
    //const student = ['rohit','mohit','sohan','ayush'];
    // Array using object throw//
    const students = [
        {name:"rohit",email:"com",role:"FrontEnd develoer"},
        {name:"mohit",email:"com",role:"BackEnd develoer"},
        {name:"sohit",email:"com",role:"Full stack develoer"},
    ]
    /*student.map((item)=>{
        console.log(item.length)
        for(let i in student){
            console.log(student[i])
        }
    }
    )*/
    
  return (
    
    <div className='ArrayMethod'>
    <h1>Array method with list </h1>
    {
        students.map((data)=>
            <h2>name is:{data.role}</h2>

        )
    }
      
    </div>
  )
}


export default ArrayMethod
