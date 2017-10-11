import React from 'react';

export default class TextComponent extends React.Component {
  
  onUserInputChange(input) {
    this.state = {input: input}
  }
  
  render() {
    return (
      <div>
        <h1>What you typed: </h1>
        <h2>{ this.state.input }</h2>
      </div>
    );
  };
};

