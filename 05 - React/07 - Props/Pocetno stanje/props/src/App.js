import React  from 'react';
import './App.css';
import { FComponent1,FComponent2,CComponent } from './Components';

const korisnici=[{ime:'Ines', godina:58}, {ime:'Blanka', godina:23},{ime:'Marija',godina:80}]

export default class App extends React.Component {
  render(){
  return (
    <div>
      <h1>Korisnixi</h1>
      <FComponent1 name={korisnici[0].ime}   age={korisnici[0].godina}>
        <p>Ja sam children</p>
        </FComponent1>
      <FComponent2 name={korisnici[1].ime} age={korisnici[1].godina}/>
      <CComponent name={korisnici[2].ime} age={korisnici[2].godina}/>
    </div>

  );
}
}

