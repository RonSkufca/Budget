import React, { Component } from 'react';
import Button from './Button';
import './GridButtons.css'; 			// Tell webpack that GridButtons.js uses these styles.

class GridButtons extends Component {
	render() {
		return (
			<div className="GridButtons">
				<Button title="Add Row" />
				<Button title="Delete Row" />
				<Button title="Move Up" />
				<Button title="Move Down" />
			</div>
		);
	}
}

export default GridButtons;