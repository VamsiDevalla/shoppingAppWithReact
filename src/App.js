import React, { Component } from 'react';
import StorePicker from './components/StorePicker/StorePicker'
import Header from "./components/Header/Header";
import Order from "./components/Order/Order";
import Inventory from "./components/Inventory/Inventory";
import './App.css';

const App = () => {
    return (
          <div className={'catch-of-the-day'}>
              <div className={'menu'}>
                  <Header tagline={'Fresh Seafood Market'}/>
              </div>
              <Order/>
              <Inventory/>
          </div>
    );
}

export default App;
