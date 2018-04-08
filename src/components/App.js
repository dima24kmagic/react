import React, { Component } from 'react';

import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
class App extends Component{
  render(){
    return(
      <React.Fragment>
        <div className="catch-of-the-day">
          <div className="menu">
            <Header />
          </div>
          <Inventory/>
          <Order/>
        </div>
      </React.Fragment>
    )
  }
}

export default App;
