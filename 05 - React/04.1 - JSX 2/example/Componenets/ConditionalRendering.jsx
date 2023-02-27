import React from "react";
export  function ConditionalRendering(props){
    const lognumber= (props.number===undefined)? false :true;
    return (
     <div>
         {lognumber ?<h3>Odabran je broj {props.number}</h3>:'Welcome strenger'}
     </div>
    );
 
 }