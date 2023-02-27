import React from 'react';
//import WelcomeFunction from './WelcomeFunction';
//import WelcomeClass from './WelcomeClass';

function WelcomeFunction(){
  return <p>Komponenta definirana funkcijom</p>
}
class WelcomeClass extends React.Component{
  render(){
    return <p>Komponenta definirana klasom</p>
  }
}



export default function App() {
  return (
    <div>
      <WelcomeFunction />
      <WelcomeClass />
    </div>
  );
}
