import axios from 'axios';

export default axios.create({
    baseURL: "https://gorest.co.in/public/v1",
    headers: {
        "Content-type": "application/json",
        "Authorization": "Bearer ffa1f554ea7b39d67636d3a18d73b135955737c483ecc4de5916c9e6df8249cf",
    }
});