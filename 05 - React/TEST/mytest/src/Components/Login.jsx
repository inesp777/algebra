import React, { useState } from 'react';
import LoginForm from './LoginForm';

export default function Login() {

    const [user, setUser] = useState({ name: '', email: '' });

    const Login = details => {
        setUser({
            name: details.name,
            email: details.email
        })
    }

    const Logout = () => {
        setUser({
            name: '', email: ''
        })
    }

    return (
        <div>
            {user.email !== '' ?
                <div>
                    <h2>Welcome, {user.name}</h2>
                    <button onClick={Logout}>Logout</button>
                </div> : <LoginForm Login={Login} />

            }
        </div >
    )

}