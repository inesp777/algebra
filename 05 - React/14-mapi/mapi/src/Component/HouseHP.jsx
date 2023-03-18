import React, { useState, useEffect } from 'react';
export default function HouseHP() {
    const [dHouses, setdHouses] = useState('');

    useEffect(() => {
        fetch('https://wizard-world-api.herokuapp.com/Houses')
            .then(response => response.json())
            .then(data => setdHouses(data))

    }, [])

    if (!dHouses) { return <h1>Wait.......</h1> }

    console.log(dHouses);
    return (
        <div>
            <ul>
                {dHouses.map(house => <MHouse key={house.id} name={house.name} heads={house.heads} traits={house.traits} />)}
            </ul>
        </div>
    );

}

function MHouse(props) {
    return (<>
        <li><b>Name: </b>{props.name}</li>
        <ul>
            <p><b>Heads:</b></p>
            {props.heads.map(head => <Mhead key={head.id} firstName={head.firstName} lastName={head.lastName} />)}
        </ul>

        <ol>
            <p><b>Traits:</b></p>
            {props.traits.map(trait => <Mtrait key={trait.id} name={trait.name} />)}
        </ol>
        <hr />
    </>)
}

function Mhead(props) {
    return <li> {props.firstName}   {props.lastName}</li>
}

function Mtrait(props) {
    return <li> {props.name}</li>
}

