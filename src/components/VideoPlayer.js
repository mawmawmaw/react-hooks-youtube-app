import React from 'react';
import './VideoPlayer.css';
const VideoPlayer = ({ videoToPlay }) => {
    if(!videoToPlay){
        return <div></div>
    }else{
        return (
            <div className="video-player">
                <div className="ui embed">
                <iframe title={videoToPlay.snippet.title} src={`https://youtube.com/embed/${videoToPlay.id.videoId}?autoplay=1`}/>
                </div>
                <div className="ui segment">
                    <h2>{videoToPlay.snippet.title}</h2>
                    <p>{videoToPlay.snippet.description}</p>
                </div>
            </div>
        )
    }
}
export default VideoPlayer;