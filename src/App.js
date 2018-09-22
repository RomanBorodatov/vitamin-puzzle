import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import FirstTask from './components/FirstTask';
import SecondTask from './components/SecondTask';
import ThirdTask from './components/ThirdTask';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header/>

          <Route path="/task-1" component={FirstTask}/>
          <Route path="/task-2" component={SecondTask}/>
          <Route path="/task-3" component={ThirdTask}/>
        </div>  
      </BrowserRouter>
    );
  }
}

export default App;
