import React,{useState} from 'react';

export default function Character() {
    const [person, setPerson] = useState({
        name: 'Kremenko',
        bestFriend: 'Barni',
        age: 30,
        loveeat: true
    })


    const changeCaracter = () => {
        setPerson( {name:'Barni',bestFriend:'Kremenko',age:40, loveeat:false});
    }
    
        return <ChildCaracter name={person.name} bestFriend={person.bestFriend} age={person.age} loveeat={person.loveeat}
            buttonClick={changeCaracter} />
    }


function ChildCaracter (props) {
   
        return (
            <div>
                <p>Ime: {props.name}. Broj godina:{props.age}<br />
                    Dobar prijatelj: {props.bestFriend}<br />
                    On {props.loveeat ? 'voli' : 'ne voli'} jesti govedinu.</p>
                <button onClick={props.buttonClick}>Change Character</button>
            </div>
        )
    }

