import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//components
import Welcome from './containers/Welcome';
import Chat from './containers/Chat';

class App extends Component {
  render() {
    return (
      <Router>
        <div> 
          <Route exact path="/" component={Welcome}/> 
          <Route path="/chat" component={Chat}/>
        </div>
      </Router>
    );
  }
}

export default App;
