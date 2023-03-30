import React, { useState} from 'react';
export default function Calculate() {
    const [numbers, setNumbers] = useState(
        {
            number1: '',
            number2: ''
        });
    const [result, setResult] = useState("");



    const handleInput = (e) => {
        setNumbers({ ...numbers, [e.target.name]: e.target.value })
    }
    

    const suma = function (e) {
        setResult(Number(numbers.number1) + Number(numbers.number2));
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={suma}>
                <input type='number' name='number1' value={numbers.number1} onChange={handleInput} placeholder='First Number'></input>
                <input type='number' name='number2' value={numbers.number2} onChange={handleInput} placeholder='Second Number'></input>
                <button type='submit'>Add Two Numbers</button>
            </form>
            <p>Total: {result}</p>
        </div>)
}





