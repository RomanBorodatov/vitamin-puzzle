import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import FirstTask from './components/FirstTask';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header/>

        <Route path="/task-1" component={FirstTask}/>  
      </BrowserRouter>
    );
  }
}

export default App;
