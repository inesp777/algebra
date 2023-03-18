import React, { useState } from 'react';

export default function Mlists() {
    const [users, setUsers] = useState([
        { Id: 0, name: 'Marko', job: 'Programer' },
        { Id: 1, name: 'Lorena', job: 'Stuardesa' },
        { Id: 2, name: 'Lorenzo', job: 'Vozač' },
        { Id: 3, name: 'Blanka', job: 'Farmaceutkinja' }
    ]);

    //const mlist=users.map(user => <li key={user.Id}>{user.name} {user.job}</li>)
    const changeName = () => {
        const marray = ['posa1', 'posa2', 'posa3','posa4']
        const newUsers = users.map(muser => { return { ...muser, job: marray[muser.Id] } })
        setUsers(newUsers);
    }

   

    return (
        <div>
            <ul>
                {users.map(user => <Userl key={user.Id} name={user.name} job={user.job} onclick={changeName} />)}
            </ul>
        </div>)

}

function Userl(props) {
    console.log(props.name)
    return (<li onClick={props.onclick}>{props.name} {props.job}</li>)
}
