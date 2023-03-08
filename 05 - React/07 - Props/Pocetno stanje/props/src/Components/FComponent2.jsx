import React from 'react';
import PropTypes from'prop-types';

export default function FComponent2(props) {
    
    return <h1>FC 2 Ime: {props.name} {props.age} Job : {props.job}</h1>;
}

FComponent2.propTypes={
    name:PropTypes.string.isRequired,
    age:PropTypes.number,
    job: PropTypes.string
}
FComponent2.defaultProps={
    name:'IIIInes',
    age:57,
    job: 'Undefinedd'
}
