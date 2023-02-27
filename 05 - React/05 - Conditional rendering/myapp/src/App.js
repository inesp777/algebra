
import './App.css';


const mystrin1='Prvi tekst';
const mystring2='drugi tekst';
function Sintaksa2() {

  const name = 'Lisa';

  const user = {
      firstName: 'Nino',
      lastName: 'Škuflić',
      job: 'Developer',
      age: 25,
      employed: true
  }

  const formatedUser = user => user.firstName + ' ' + user.lastName;

  let friendOrStranger;
  if (user.lastName === 'Škuflić') {
      friendOrStranger = 'Hello, friend';
  } else {
      friendOrStranger = 'Hello, stranger';
  }

  return (
      <div>
          <h1>Helloooooo, {name}. Welcome to React module.</h1>
          <p>The details of the user are as follows:<br />
              Name: {user.firstName}<br />
              Surname: {user.lastName}<br />
              Age: {user.age}
          </p>
          <p>Hello, the formatted user is {formatedUser(user)}</p>
          <h3>{friendOrStranger}</h3>
      </div>
  );
}


function App() {
  return (
    <div className="App">
    <Sintaksa2/>
    </div>
  );
}

export default App;
