import axios from "axios";
 
const KEY = 'AIzaSyA_luelUNW4hGYeqeaKPaHy9CbBKf6RKk8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 15,
        key: `${KEY}`
    }
});