import React, { Component } from 'react';
import router from './router.js';
import Header from './components/Header/Header.js';
import Private from './components/Private/Private.js';

class App extends Component {
 
  render() {
    return (
      <div className="App">
        <Header />
        
       
        
           {router}
      </div>
    );
  }
}

export default App;
