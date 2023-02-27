import './App.css';
import Student from './Components/Student';
import Program from './Components/Program';
import Grades from './Components/Grades';
import Person from './Components/person';

function App() {
  return (
    <div>
      {Person.name}
      <Student />
      <Program />
      <Grades />
    </div>
  );
}

export default App;