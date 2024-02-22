import React from "react";

/* Header is a function component that takes props as a parameter. The props object contains properties passed from the parent component.*/
 const Header = (props) => {
    console.log(props);
    /* props is a immutable not chanege value
    props.name = "sohan";*/
return(
    <div>
<h1>Hello functional Component {props.name}-{props.last}</h1>
{props.children}
</div>
)
}
export default Header;
