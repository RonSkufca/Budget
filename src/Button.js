import React, { Component } from 'react';

class Button extends Component {
	constructor() {
		super();
		this.state = { clicked: false };
		
		// binding in the constructor guarentees that it is bound only once for every instance.
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick() {
		this.setState({clicked: !this.state.clicked});
		alert(this.props.title + ' Button Clicked.');
	}
	
	render() {
		const text = this.state.clicked ? 'clicked' : 'haven\'t clicked';
		return (
			// you can use this.handleClick here because it was arleady bound in the constructor.
			<div>
				<button onClick={this.handleClick}>{this.props.title}</button>				
			</div>			
		);
	}	
}

export default Button;