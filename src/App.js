import React, { Component } from 'react';
import StorePicker from './components/StorePicker/StorePicker'
import Header from "./components/Header/Header";
import Order from "./components/Order/Order";
import Inventory from "./components/Inventory/Inventory";
import './App.css';

class App extends Component {
  render() {
    return (
          <div className={'catch-of-the-day'}>
              <div className={'menu'}>
                  <Header/>
              </div>
              <Order/>
              <Inventory/>
          </div>
    );
  }
}

export default App;
