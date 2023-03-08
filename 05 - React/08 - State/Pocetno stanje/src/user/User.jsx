import React from 'react';

export default function User(props) {
  return (
    <p>
      Ime korisnika:{props.name} <br/>
      Godine: {props.years}
    </p>

  );
}