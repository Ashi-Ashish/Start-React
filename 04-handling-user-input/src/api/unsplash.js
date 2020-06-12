import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 3IZgFlaCL98fQLzAk8kXLO6QOy_KrV0bHuRPcuhcmtM'
    }
});