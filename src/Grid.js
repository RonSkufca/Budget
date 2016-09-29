import React, { Component } from 'react';
import ReactDataGrid from 'react-data-grid';
import ReactDataGridPlugins from 'react-data-grid/addons';
import GridButtons from './GridButtons';

var myRows = [];

for (var index = 1; index <= 20; index++) 
{
  myRows.push({	description: 'Description ' + index,
				debt: 'Debt ' + index,
				credit: 'Credit ' + index,
				balance: 'Balance ' + index});
}

//A rowGetter function is required by the grid to retrieve a row for a given index
var rowGetter = function(i)
{
  return myRows[i];
};
	
var columns = [
	{
	  key: 'description',
	  name: 'Description'
	},
	{
	  key: 'debt',
	  name: 'Debt'
	},
	{
	  key: 'credit',
	  name: 'Credit'
	},
	{
	  key: 'balance',
	  name: 'Balance'
	}
]

/*	
	This is the ES6 syntax. It is similar to React.createClass with the exception of the getInitialState.
	Instead of providing a separate getInitialState method, you set up your own state property in the constructor.
	Just like the return value of getInitialState, the value you assign to this.state will be used as the 
	initial state for your component. 
	Another difference is that propTypes and defaultProps are defined as properties on the constructor instead of in the class body.	
*/
class Grid extends Component {
	render() {
		return (
			<div>
				<ReactDataGrid columns={columns} rowGetter={rowGetter} rowsCount={myRows.length} minHeight={300}/>
				<GridButtons />
			</div>			
		);
	}	
}

export default Grid