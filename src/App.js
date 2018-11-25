import React, { Component } from 'react';

import './App.css';

import CountryList from './CountryList';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<CountryList />
				</header>
			</div>
		);
	}
}

export default App;
