export default function Sintaksa() {
    const name = 'Lisa';
    const user = {
        firstName: 'Ines',
        lastName: 'Peresa',
        age: 40,
        employed: true
    }
    const formatedUser = user => user.firstName + ' ' + user.lastName;
    let friendOrStranger;
    if (user.lastName === 'Peresa') {
        friendOrStranger = 'Heloo friend'
    } else { friendOrStranger = 'Heloooo stranger' }

    return (
        <div>
            <h1>Heloo, {name}. Welcome</h1>
            <p>The details of the user sre as follows<br />
                Name:{user.firstName}<br />
                Surname:{user.lastName}<br />
                Age:{user.age}
            </p>
            <p>Heloo the formated user is {formatedUser(user)}</p>
            <h3>{friendOrStranger}</h3>
        </div>
    );
}