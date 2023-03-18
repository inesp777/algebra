import React, { useState, useEffect } from 'react';
export default function Houses() {
    const [data, setData] = useState('');

    useEffect(() => {
        fetch('https://wizard-world-api.herokuapp.com/Houses')
            .then(response => response.json())
            .then(houseData => setData(houseData))
    }, [])

    if (!data) {
        return <h1>Loading House Harry Potter data....</h1>
    }

    

    return (
        <div >
           console.log(data.name);
        </div>
    )
}