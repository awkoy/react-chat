import React, { Component } from 'react'; 
import Title from "./../components/title";
import List from "./../components/list";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Online",
      message: [{
        username: 'Username',
        content: 'HelloWorld!'
      }]
    }
  } 
  
  render() {
    const {title, message} = this.state;
    return (
      <div className="app__container">
        <Title val={title} /> 
        <List message={message} />
      </div>
    );
  }
}

export default Chat;
