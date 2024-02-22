import React from 'react';
// props {property} used in component in propery recieve value and props not value immutable(change)//
export const  Header = (props)=>{
    console.log(props);
    return(
        <div>
     <h1>hello function component{props.name}-{props.last}</h1>
     {props.children}
     </div>

    )
}
//export default Header;