import React from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

export default class Forms extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            minput: '',
            msubmit: false
        }
        //  this.handleChange = this.handleChange.bind(this);
        //  this.handleSubmit = this.handleSubmit.bind(this); 
    }


    handleChange = (e) => {
        this.setState({ minput: e.target.value })
    }


    handleSubmit = (e) => {
        alert('Upisano je : ' + this.state.minput)
        this.setState({ msubmit: true })
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Unesi naziv:
                    <input type='text' value={this.state.name} onChange={this.handleChange} />
                </label>
                <Button variant='primary' type='submit' >Submit</Button>
                <Alert variant='danger' hidden={this.state.msubmit ? false : true}>
                    Unos je spremljen: {this.state.minput}
                </Alert>
            </form>
        );

    }
}
