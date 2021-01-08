import React, {useState} from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer';
import useVideos from '../hooks/useVideos';
import './App.css'
const App = () => {
    const [selectedVideo,setSelectedVideo] = useState('');
    const [searchResults, onSearchSubmit] = useVideos('',setSelectedVideo);
    return (
        <div id="App" className="ui container">
            <SearchBar onSearchSubmit={onSearchSubmit}/>
            <div className="ui grid">
                <div className={ selectedVideo !== '' ? 'eleven wide column' : 'hidden'}>
                    <VideoPlayer videoToPlay={selectedVideo}/>
                </div>
                { searchResults.length !== 0 ?
                    <div className={ selectedVideo !== '' ? 'five wide column' : 'sixteen wide column'}>
                        <VideoList videos={searchResults} onThumbnailClick={(video) => setSelectedVideo(video)}/>
                    </div>
                : '' }
            </div>
        </div>
    )
}
export default App;