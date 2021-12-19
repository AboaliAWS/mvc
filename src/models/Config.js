import axios from 'axios';

export default axios.create({
    baseURL: "https://gorest.co.in/public/v1",
    headers: {
        "Content-type": "application/json"
    }
});