import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

//for store
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

//containers
import Welcome from './containers/Welcome';
import Chat from './containers/Chat';

const middleware = applyMiddleware( thunk, logger );
const store = createStore (rootReducer, middleware);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router> 
          <div>
            <Route exact path="/" component={Welcome}/> 
            <Route path="/chat" component={Chat}/> 
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
