import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import DynamicForm from './DynamicForm/Component';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Route exact path="/" render={()=> (<Redirect to="/dynamicForm"/>)} />
      </div>
    );
  }
}

export default App;
