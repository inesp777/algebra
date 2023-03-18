import React from 'react';
const UserContext = React.createContext();

export default function AuthUser() {
    /* dodajemo  context-provider*/
    return (
        <UserContext.Provider value={{
            user: 'Ines',
            lastAccess: '11/03/2023 11:47:14 CET',
            didLogOut: true
        }}>
            <User />
        </UserContext.Provider>
    )

}
function User() {
    return (
        <UserContext.Consumer>
            {value =>
                <p>The user is {value.user}<br />
                    Last access:{value.access}<br />
                    User did log out:{value.didLogOut ? 'User did log out' : 'User did not log out'}
                </p>}
        </UserContext.Consumer>
    )


}