import './CardVideos.css';
import React from 'react';

const CardVideos = ({videos, onVideoSelect}) => {
	return (
	  <div onClick={() => onVideoSelect(videos)} className="video-item centered item">
	    <div className="ui small image">
	      <img alt={videos.snippet.title} src={videos.snippet.thumbnails.high.url} />
	    </div>
	    <div className="content">
	      <div className="header" style={{ fontSize: '15px' }}>{videos.snippet.title}</div>
	      <div className="meta">
	        <span>{videos.snippet.channelTitle}</span>
	      </div>
	    </div>
	  </div>
	);
}

export default CardVideos;