import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 0qDRVtstRjT9d7mjG1CwvEZbZDm-Mn5T1RviGPnXnRE',
      }
});