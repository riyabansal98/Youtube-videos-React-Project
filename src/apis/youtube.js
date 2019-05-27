
import axios from 'axios';
const KEY = 'AIzaSyB4C0PlQBuqzR5NjRMcDaV7LydshI97wF8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part:'snippet',
        maxResults: 5,
        key: KEY
    }
});
