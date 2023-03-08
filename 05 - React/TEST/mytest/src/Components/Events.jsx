import React,{useState} from 'react';
export default  function Events(){
    function handleClick(){
        alert('You have clicked a button');
    }
    function handleSubmit(e){
        e.preventDefault();
        alert('Form was submitted');
    }

return(
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Enter name'/>
            <button type='submit'>Submit form</button>
        </form>
        <hr/>
        <button onClick={handleClick}>Click me</button>
    </div>
);

}