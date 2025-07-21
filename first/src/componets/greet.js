import React from 'react';
const Greet = (props) =>  {

console.log("Hello componets ");
return (
<div>
    <h1>
         hello world {props.name}{props.city} 
         </h1>
         {/* <button>{props.children} </button> */}

    </div>
);

};

export default Greet;

