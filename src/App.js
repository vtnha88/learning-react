import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { DISHES } from './shared/dishes';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return (
      <div className="App">
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
