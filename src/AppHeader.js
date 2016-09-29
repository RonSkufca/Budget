import React, { Component } from 'react';
import logo from './logo.svg';	// Tell webpack that this JS file uses this image.
import './AppHeader.css';	// Tell webpack that AppHeader.js uses these styles.

class AppHeader extends Component {
	render() {
		return (
			<div className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h2>Welcome to React</h2>
			</div>    
		);
	}	
}

export default AppHeader;