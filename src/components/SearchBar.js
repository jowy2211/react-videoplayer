import React from 'react';

class SearchBar extends React.Component {
	state = { term: '' };

	handleSearchSubmit = (event) => {
		event.preventDefault();
		this.props.getValue(this.state.term);
	}

	render() {
		return (
			<div className="ui segment">
				<form onSubmit={this.handleSearchSubmit} className="ui form">
					<div className="field">
						<label>Search</label>
						<input onChange={(e) => this.setState({term: e.target.value})} value={this.state.term} type="text" placeholder="Search Videos..." />
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;