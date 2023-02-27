
import './App.css';
//import {ConditionalRendering} from'./Componenets/ConditionalRendering';
//import Sintaksa from './Componenets/Sintaksa';






function App() {
  const mtxt1 = 'Prvi tekst';
  const mobj = {
    ime: 'Ines',
    prezime: 'Peresa'
  };
  const fullTxt = mtxt1 + '  ' + mobj.ime + ' ' + mobj.prezime;
  return (
    <div>
      <p>Ispis dva teksta</p>
      <p>{mtxt1}</p>
      <p>{mobj.ime}</p>
      <p>{fullTxt}</p>
    </div>
  );
}

export default App;
