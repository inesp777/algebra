import React,{useState, useEffect} from 'react';
export default function Calculate(){
const [numbers,setNumbers]=useState(
    {number1:'',
    number2:''
});


const handleInput=(e)=>{
    setNumbers({...numbers,[e.target.name]:e.target.value})
}
const [result, setResult] = React.useState("")

const suma=function(){
setResult(Number(numbers.number1)+Number(numbers.number2))
}
    return(
    <div>
<form>
    <input type='number' name='number1' value={numbers.number1} onChange={handleInput}placeholder='First Number'></input>
    <input type='number'name='number2' value={numbers.number2} onChange={handleInput}placeholder='Second Number'></input>
    <button onClick={suma }>Add Two Numbers</button>
  
</form>
<p>Total: {result}</p>
    </div>)
}

