import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID n3lxJDXwWLy0IgIxMch0exgmEEVSj85HquK9ccTtl1E'
    }
});