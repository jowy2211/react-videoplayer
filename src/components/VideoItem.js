import './CardVideos.css';
import React from 'react';

const VideoItem = ({videos, onVideoSelect}) => {
	return (
	<div onClick={() => onVideoSelect(videos)} className="video-item item">
		<div className="ui small image">
	      <img alt={videos.snippet.title} src={videos.snippet.thumbnails.high.url} />
	    </div>
		<div className="content">
	      <div className="header" style={{ fontSize: '15px' }}>{videos.snippet.title}</div>
		  <div className="meta">
	        <span>{videos.snippet.channelTitle}</span>
	      </div>
		  <div className="description">{videos.snippet.description}</div>
		</div>
	</div>
	);
}

export default VideoItem;