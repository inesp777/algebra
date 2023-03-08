import React from 'react';
import { User } from './user';

export default function App() {
  const [users, setUsers] = React.useState([
    { name: 'Ivan', years: 30 },
    { name: 'Marko', years: 35 },
    { name: 'Ana', years: 25 },
  ]);

  const [note, handleNote] = React.useState('');

  const handleButtonPress = () => {
    const newUsers = users.map(user => {
      return { ...user, years: user.years + 1 };
    });

    setUsers(newUsers);
  };

  const handleChange = (event) => {
    let mnote = event.target.value;
    handleNote(mnote);
  }
  const handleClickYear = () => {

    let newUsers = users;
    console.log(newUsers[1].years);
    newUsers[1].years = 50;
    newUsers[0].years = 40;
    newUsers[2].years = 60;
    setUsers(newUsers);
    console.log(users[1].years);
  }




  return (
    <div>
      <h1>React aplikacija</h1>
     

      <form>
        <label >
          Note :
          <input type="text" id="myinput" value={note} onChange={handleChange} />

        </label>
      </form>
      <p>Note je:{note}</p>
      <p>Ovo zbilja radi</p>
      <button onClick={handleClickYear}>Promjena godina</button>
      <User name={users[0].name} years={users[0].years} />
      <User name={users[1].name} years={users[1].years} />
      <User name={users[2].name} years={users[2].years} />
    
    </div>
  );

}
