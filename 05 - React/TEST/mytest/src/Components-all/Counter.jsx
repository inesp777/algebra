import React from 'react';
export default class SendState extends React.Component {

    state = { count: 0 }
    changeCounter = () => {
        this.setState({ count: this.state.count + 1 })
    }
    render() {
        return (
            <div>
                <ReceivesCount count={this.state.count} onButtonClick={this.changeCounter} />
            </div>
        )
    }
}
function ReceivesCount({ count , onButtonClick}) {
    return (
        <div>
<p>Counter:</p>
<p>Numbers of click {count}</p>
<button onClick={onButtonClick}>Click me</button>
</div>
    )

}