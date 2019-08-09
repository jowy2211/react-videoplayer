import React from 'react';
import CardVideos from './CardVideos';

const VideoDetail = ({ videoDetail, dataVideos, onVideoSelect }) => {
	const list = dataVideos.map(
		(video) => {
			return <CardVideos onVideoSelect={onVideoSelect} key={video.id.videoId} videos={video} />
		}
	);

	if (videoDetail) {
		const videoLink = `https://www.youtube.com/embed/${videoDetail.id.videoId}`;
		return (
		<div className="ui segment">
			<div className="ui small grid">
				<div className="nine wide column">
					<div className="ui container">
					  <div className="ui embed">
					    <iframe title="streaming youtube" src={videoLink} />
					  </div>
					  <div className="ui segment">
					    <div className="header" style={{ fontSize: '20px'}}>{videoDetail.snippet.title}</div>
						<p>{videoDetail.snippet.description}</p>
					  </div>
					</div>
				</div>
				<div className="seven wide column">
					<div className="ui unstackable items">
						{list}
					</div>
				</div>
			</div>
		</div>
		);
	}
	return <div></div>
}

export default VideoDetail;
