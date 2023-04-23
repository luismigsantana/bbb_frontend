import axios from 'axios'

const base = process.env.VUE_APP_BASE_URL || "http://127.0.0.1:8000"

const api = axios.create({
    baseURL: base,
});

export default api