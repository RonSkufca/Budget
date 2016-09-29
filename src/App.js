import React, { Component } from 'react';
import './App.css'; 			// Tell webpack that App.js uses these styles.
import AppHeader from './AppHeader';
import Grid from './Grid';

class App extends Component {
  render() {
    return (
      <div className="App">
		<AppHeader />          
		<Grid />
      </div>	  
    );
  }
}
export default App;