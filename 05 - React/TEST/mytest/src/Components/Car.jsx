import React from 'react';

export default class Car extends React.Component {

    state = {
        brend: 'Ford',
        model: 'Mustang',
        color: 'Red',
        year: 1964
    }

    changeCar =()=>{
        this.setState({ model:'Fiesta',color:'green', year:2000})
    }
    

    render() {
        return (
            <div>
                <p>The selected car is {this.state.brend} {this.state.model} from {this.state.year} godine</p>
                <p>The color of the car is {this.state.color}</p>
                <button onClick={this.changeCar}>Drugi model</button>

            </div>
        );
    }
}