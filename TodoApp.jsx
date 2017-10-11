import React from 'react';
import ToDoList from './ToDoList.jsx';

export default class ToDoApp extends React.Component {
    constructor() {
        super();
        this.state = {list: ['Learn React', 'What the heck is JSX', 'what the f*%# are keys in arrays?', 'wow! React is cool'], text: 'Your next task here ...'};
        this.onButtonClick = this.onButtonClick.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }
    
    render() {
        return (
                <div>
                    <p>Smash that button to add      <b className="emphasize"> " {this.state.text} "</b>  to your to do list.</p>
                    <input type="text" value={this.state.text} onChange={this.onInputChange}/><br/>
                    <button className="confirm" onClick={this.onButtonClick}> Smash me real hard to confirm</button>
                    <button className="clear" onClick={this.onClearClick.bind(this)}> Gently click me to clear :) </button>
                    <ToDoList taskList={this.state.list}/>
                </div>
        );
    }
    
    onInputChange(e) {
        this.setState({text: e.target.value});
    }
    
    onButtonClick() {
        if(this.state.text) {
            this.setState((prevState) => {
                return {newList: prevState.list.push(this.state.text), text: ''};
            });
        }
    }
    
    onClearClick() {
        // console.log(this);
        this.setState({ text: ''});
    }
}
