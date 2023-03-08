import React from 'react';

export default class Caracters extends React.Component {
    state = {
        name: 'Kremenko',
        bestFriend: 'Barni',
        age: 30,
        loveeat: true
    }

    changeCaracter = () => {
        this.setState({ name: 'Barni', bestFriend: 'Kremenko', age:40,loveeat: false })
    }
    render() {
        return <ChildCaracter name={this.state.name} bestFriend={this.state.bestFriend} age={this.state.age} loveeat={this.state.loveeat}
            buttonClick={this.changeCaracter} />
    }
}

class ChildCaracter extends React.Component {
    render() {
        return (
            <div>
                <p>Ime: {this.props.name}. Broj godina:{this.props.age}<br />
                    Best friend is: {this.props.bestFriend}<br />
                    Hi {this.props.loveeat ? 'likes' : 'dont like'} to eat beef.</p>
                <button onClick={this.props.buttonClick}>Change Character</button>
            </div>
        )
    }

}