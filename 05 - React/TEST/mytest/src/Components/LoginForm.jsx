import React, { useState } from 'react'

function LoginForm({ Login, error }) {

    const [details, setDetails] = useState({ name: '', email: '', password: '' })

    const submit = e => {
        e.preventDefault();
        Login(details)
    }

    return (
        <form onSubmit={submit}>
            <h2>Login</h2>
            <div>
                <label htmlFor='name'>Name:</label>
                {/* ...details -> get the same details as before, but update only the name */}
                <input type='text' name='name' id='name' onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name} />
            </div>
            <div>
                <label htmlFor='email'>Email:</label>
                <input type='email' name='email' id='email' onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
            </div>
            <div>
                <label htmlFor='password'>Password:</label>
                <input type='password' name='password' id='password' onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default LoginForm