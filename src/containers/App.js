import React, { Component } from 'react';

class App extends Component {
	render() {
		reutrn (
			<div>
				{this.props.children}
			</div>
		);
	}
}

export default App;
