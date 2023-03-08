// Moramo importati React kada radimo Class komponente, inaće React.Component neće raditi (react nije definiran)
import React from 'react';

export default class ClassComponent extends React.Component {
    render() {
        return <h2> Ime: {this.props.name} Godina: {this.props.age}</h2>
    }
}
