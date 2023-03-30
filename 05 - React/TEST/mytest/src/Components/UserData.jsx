import React, { useState, useEffect } from 'react';
// https://jsonplaceholder.typicode.com/users/1

export default function UserData() {
    const [userData, setUserData] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => response.json())
            .then(data => setUserData(data))
    }, []);

    if (!userData) { return <h1>Loading data....</h1> }

    return (
        <div>
            {console.log(userData.name)}
            <p>User data: </p>
            <p>Name: {userData.name}</p>
            <p>Website:{userData.website}</p>
            <p>Email: {userData.email} </p>
            <p>Phone: {userData.phone} </p>
            <p>Address:
                {userData.address.street}, {userData.address.suite} - {userData.address.city}
            </p>

        </div>

    )

}