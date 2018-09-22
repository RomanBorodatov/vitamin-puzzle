import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/task-1">Task 1</Link>
        <Link to="/task-2">Task 2</Link>
        <Link to="/task-3">Task 3</Link>
      </div>
    );
  }
}

export default Header;
