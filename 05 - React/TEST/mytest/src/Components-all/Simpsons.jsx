import React from 'react';

export default class Parent extends React.Component{
state ={
name:'Lisa',
bestFriend:'Janey Powell',
loveSchool:true
}

changeCaracter = ()=>{
    this.setState({name:'Bart', bestFriend:'Milhouse Van Houten', loveSchool:false})
}
render(){
return <Child name={this.state.name} bestFriend={this.state.bestFriend} loveSchool={this.state.loveSchool} 
buttonClick={this.changeCaracter}/>
}
}

class Child extends React.Component{
render(){
    return (
        <div>
<p>Hi, my name is {this.props.name}. My best friend is {this.props.bestFriend} and my mother is Marge Simpson. I really, really {this.props.loveSchool?'love':'dont  love'} scool.</p>
<button onClick={this.props.buttonClick}>Change Character</button>
        </div>
    )
}

}