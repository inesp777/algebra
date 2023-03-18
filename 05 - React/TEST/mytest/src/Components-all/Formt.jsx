import React from 'react';
export default class Formt extends React.Component {
    state = { name: '' }
    handleChange = (e) => {
        this.setState({ name: e.target.value });
    }
    handleSubmit(e) {
        alert('A name was submitted:' + this.state.name)
        e.preventDefault();
    }
    render() {
        return (
            <form onSubmit={() => this.handleSubmit()}>
                <label>
                    Name:
                    <input type='text' value={this.state.name} onChange={this.handleChange} />
                </label>
                <button type='submit' >Submit</button>
            </form>
        );
    }
}
