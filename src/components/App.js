import React from 'react';
import youtube from '../api/youtubeapi';
import SearchBar from './SearchBar';
import VideosList from './VideosList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
	state = { videos: [], videoSelect: null };

	componentDidMount() {
		this.getSearchValue('vice');
	}
	getSearchValue = async (value) => {
		const promise = await youtube.get('/search', 
		{ 
			params: { 
				part: 'snippet', 
				maxResults: 5, 
				key: 'AIzaSyCx-mxyqq4TRd6grXGkOkXLa54-YlQdgD8', 
				q: value,
				type: 'video'
			}
		});
		this.setState({ videos: promise.data.items });
	}

	getVideoSelect = (video) => {
		this.setState({ videoSelect: video });
	}

	render() {
		return (
			<div className="ui container">
				<SearchBar getValue={this.getSearchValue} />
				<VideoDetail videoDetail={this.state.videoSelect} dataVideos={this.state.videos} onVideoSelect={this.getVideoSelect} />
				<VideosList onVideoSelect={this.getVideoSelect} dataVideos={this.state.videos} />
			</div>
		);
	}
}

export default App;
