import React, { useState, useEffect } from 'react';

export default function Exericses() {

    // Exercise 1
    const users = [
        { name: 'John Doe', id: 1 },
        { name: 'Jane Doe', id: 2 },
        { name: 'Billy Doe', id: 3 }
    ];

    const userItems = users.map((user) => <li key={user.id}>{user.name}</li>);

    // Exercise 2
    const [show, setShow] = useState(true);

    // Exercise 3
    const [value, setValue] = useState('');

    // Exercise 4
    const [number1, setNumber1] = useState();
    const [number2, setNumber2] = useState();
    const [total, setTotal] = useState(0);

    function calculateTotal() {
        setTotal(number1 + number2);
    }

    // Exercise 5
    const [counter, setCounter] = useState(0);

    // Exercise 6
    const url = 'https://jsonplaceholder.typicode.com/users/1';

    const [userData, setUserData] = useState({});

    const getUserData = async () => {
        const response = await fetch(url);
        const jsonData = await response.json();
        setUserData(jsonData);
    };

    useEffect(() => {
        getUserData();
    }, []);

    return (
        <div>
            <h1>Exercise 1</h1>
            <p>Your task is to show users from an array of objects here.</p>
            <h6>User names</h6>
            <ul>{userItems}</ul>

            <hr />
            <h1>Exercise 2</h1>
            <p>Your task is to show or hide the text bellow based on a button click.</p>
            <button onClick={() => setShow(!show)}>
                {show ? 'Hide Element Below' : 'Show Element Below'}
            </button>
            {show && <div>Toggle Challenge</div>}

            <hr />
            <h1>Exercise 3</h1>
            <p>Your task is to show the text as it is being inputed.</p>
            <input type='text' placeholder='Enter Text' value={value} onChange={(e) => setValue(e.target.value)} />
            <p>{value}</p>

            <hr />
            <h1>Exercise 4</h1>
            <p>Your task is to calculate (+) two numbers once they are inputed and the button is clicked.</p>
            <input placeholder='First Number' type='number' value={number1} onChange={(e) => setNumber1(+e.target.value)} />
            <input placeholder='Second Number' type='number' value={number2} onChange={(e) => setNumber2(+e.target.value)} />
            <button onClick={calculateTotal}>Add Two Numbers</button>
            <p>Total: {total || ''}</p>

            <hr />
            <h1>Exercise 5</h1>
            <p>Your task is to create a simple counter.</p>
            <h6>Counter: {counter}</h6>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
            <button onClick={() => setCounter(counter - 1)}>Decrement</button>

            <hr />
            <h1>Exercise 6</h1>
            <p>Your task is to fetch and show data from jsonplaceholder.typicode.com/users/1.</p><br/>
            <h6>User Data</h6>
            <p>Name: {userData.name}</p>
            <p>Website: {userData.website}</p>
            <p>Email: {userData.email}</p>
            <p>Phone: {userData.phone}</p>

        </div >
    );
}