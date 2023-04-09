import React, { useState, useEffect } from 'react';
import Details from './Details';

export default function Forma() {
    const [userName, setUserName] = useState('');
    const [userData, setUserData] = useState('');
    const [userRep, setUserRep] = useState([]);
    const [mstatus, setStatus] = useState(false);


    const fetchuser = () => {
        fetch(`https://api.github.com/users/${userName}`)
            .then(response => response.json())
            .then(data => setUserData(data))

    }
    const fetchrepo = () => {
        fetch(`https://api.github.com/users/${userName}/repos`)
            .then(response => response.json())
            .then(data => setUserRep(data))
    }


        const onclick = () => {
            fetchuser();
            fetchrepo();
            setStatus(!mstatus)
       }

        return (
            <div>
                {!mstatus ? <div>
                    <p>GitHub username:</p>
                    <input type='text' placeholder='e.g.facebook' value={userName} onChange={(e) => setUserName(e.target.value)} />
                    <button onClick={onclick}>GO!</button>
                </div> :
                    <Details avatar_url={userData.avatar_url} name={userData.name} location={userData.location} bio={userData.bio} repo={userRep} />
                }

            </div>
        )
    }