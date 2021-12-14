import axios from "axios";

const client = axios.create({
    withCredentials: true,
});

// client.defaults.baseURL = `${process.env.REACT_APP_TEST_URL}/api/v1`;

export default client;