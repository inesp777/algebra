import React from 'react';
import { UserChildren, UserClass, UserFunction } from './user';



export default class App extends React.Component {
  state = {
    users: [
      { name: 'Ivan', years: 30 },
      { name: 'Marko', years: 35 },
      { name: 'Ana', years: 25 },
    ],
    mchildren: 'Ovo je proizvoljan tekst!!',
    note: ''
  }

  handleChange = (event) => {
    let mnote = event.target.value;
    this.setState({ note: mnote });
  }
  handleClickYear  = () => {
    const { users } = this.state;
    //const newUsers = users.map(user =>user.years += 1);
    //this.setState({ users: newUsers });
    const newUsers=users;
    newUsers[1].years='50';
    newUsers[0].years='40';
    newUsers[2].years='60';
    this.setState({ users: newUsers });
    }
  

  render() {
    const { users, mchildren, note } = this.state;
    return (
      <div>
        <h1>React aplikacija</h1>
        <button onClick={this.handleClickYear}>Promijeni godinu:</button>
       
        <form>
          <label >
            Note:
            <input type="text" id="myinput" value={note} onChange={this.handleChange}></input>
          </label>
        </form>
        <p>{this.state.note}</p>
        <p>Ovo zbilja radi</p>
        <UserFunction name={users[0].name} years={users[0].years} />
        <UserFunction name={users[1].name} years={users[1].years} />
        <UserClass name={users[2].name} years={users[2].years} />
        <UserChildren name={users[2].name} years={users[2].years} >

          {mchildren}
          <br />
        </UserChildren>


      </div>
    );
  }
}