import React, { useState } from 'react';
export default function ShowInput() {

    const [minput, setInput] = useState('')

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    return (
        <>
            <input type='text' value={minput} onChange={handleChange}></input>
            <p>{minput}</p>
        </>
    )
}