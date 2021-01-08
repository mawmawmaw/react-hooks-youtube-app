import {useState} from 'react';
import youtube from '../apis/youtube';
const KEY = "AIzaSyCnYFXX5nX3KBiN9xkDEiIVZTjooV2VnDQ";

const useVideos = (defaultTerm, select) => {
    const [searchResults,setSearchResults] = useState([]);
    const onSearchSubmit = (term) => {
        youtube.get("/search", {
            params: {
              q: term,
              part: "snippet",
              type: 'video',
              maxResults: 20,
              key: KEY
            }
        }).then(res => {
            select('');
            setSearchResults(res.data.items)
        })
    }
    return [searchResults,onSearchSubmit];
}

export default useVideos;