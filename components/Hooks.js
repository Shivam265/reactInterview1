import React,{ useState} from 'react'

function Hooks() {

const [channelname,setname] = useState("Information Technology")// useState used in value execute
const[count,setcount] = useState("subcriber")

//const name = channelname[0];//first in current value
//const setName = channelname[1];// second setstate in update value
const stateHandler=()=>{
    setname("rohit kumar")
    setcount("life is start")
  



}

/*useEffect(()=>{
    console.log("Rohit kumar");

});*/


  return (
    <div>
    {count}
    {channelname}
    <button onClick={stateHandler}>Click here</button>
      
    </div>
  )
}

export default Hooks
