import React from 'react';
import './VideoThumbnail.css';

const VideoThumbnail = ({video, onThumbnailClick}) => {
    const {title, channelTitle, description, thumbnails} = video.snippet;
    return (
        <div className="item video-thumbnail" onClick={()=>{onThumbnailClick(video)}}>
            <img className="ui image" src={thumbnails.medium.url} alt=""/>
            <div className="content">
                <div className="title">{title}</div>
                <div className="channel">{channelTitle}</div>
                <div className="description">{description}</div>
            </div>
        </div>
    )
}
export default VideoThumbnail;