import React from 'react';
import style from './style.css';
import Form from './components/Form';
import ImagesContainer from './components/ImagesContainer';
import axios from 'axios';

class App extends React.Component {
	state = { resultsArray: [] };
	onSearchSubmit = async (e, inputValue) => {
		e.preventDefault();
		if (inputValue) {
			console.log(inputValue);
			console.log('SUBMITED!');
			const imagesArray = await axios.get(
				`https://api.unsplash.com/search/photos?query=${inputValue}&client_id=1ZHwHZGYSt5lao5R5OAuQh7x_PGtBtkmxjESz2kLj1I`
			);
			this.setState({ resultsArray: imagesArray.data.results });
			console.log(this.state.resultsArray);
		} else {
			alert('Write something to search');
		}
	};

	render() {
		return (
			<div className="appContainer">
				<Form onSearchSubmit={this.onSearchSubmit} />
				<ImagesContainer imgArray={this.state.resultsArray} />
			</div>
		);
	}
}

export default App;
