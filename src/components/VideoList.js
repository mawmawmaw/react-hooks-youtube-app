import React from 'react';
import VideoThumbnail from './VideoThumbnail';
import './VideoList.css';
const VideoList = ({videos, onThumbnailClick}) => {
    const renderedList = videos.map(video => {
        return <VideoThumbnail 
                    key={video.id.videoId} 
                    video={video} 
                    onThumbnailClick={onThumbnailClick}
                />
    })
    return (
        <div className="ui list relaxed divided video-list">
            {renderedList}
        </div>
    )
}
export default VideoList;