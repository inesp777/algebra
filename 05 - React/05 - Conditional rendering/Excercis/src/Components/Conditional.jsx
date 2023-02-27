import React from "react";
export default function Conditional(){
   const loggedIn=true;
   return (
    <div>
        {loggedIn ?'Welcome user':'Welcome strenger'}
    </div>
   );

}