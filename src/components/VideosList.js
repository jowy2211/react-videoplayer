import React from 'react';
import VideoItem from './VideoItem';

const VideosList = ({ dataVideos, onVideoSelect }) => {
	const list = dataVideos.map(
		(video) => {
			return <VideoItem onVideoSelect={onVideoSelect} key={video.id.videoId} videos={video} />
		}
	);
	return (
		<div className="ui relaxed divided list">
			{list}
		</div>
	);
}

export default VideosList;