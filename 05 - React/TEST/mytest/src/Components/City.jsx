import React from 'react';

export default class City extends React.Component {
    state = {
        city: 'Zagreb',
        state: 'Croatia'
    }

    changestate=() => {
const newcity= this.state.city==='Zagreb' ? 'Osijek' : 'Zagreb';
this.setState({city:newcity})
    }

    render() {
        return (
            <div>
                <p>Grad: {this.state.city}</p>
                <p>Država: {this.state.state}</p>
                <button onClick={this.changestate}>Drugi grad</button>

            </div>)
    }
}
