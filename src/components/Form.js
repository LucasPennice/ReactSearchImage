import React from 'react';

class Form extends React.Component {
	state = { inputValue: '' };

	render() {
		return (
			<div>
				<form
					className="formClass"
					onSubmit={(e) => {
						this.props.onSearchSubmit(e, this.state.inputValue);
						this.setState({ inputValue: '' });
					}}
				>
					<input
						className="input"
						placeholder="Search Something"
						type="text"
						value={this.state.inputValue}
						onChange={(e) => {
							this.setState({ inputValue: e.target.value });
						}}
					/>
					<button className="searchButton">&#128269;</button>
				</form>
			</div>
		);
	}
}

export default Form;
