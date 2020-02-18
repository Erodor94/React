import axios from 'axios'

export default class Api {
    get (url) {
        return axios.get(url)
    }

    post (url, body) {
        return axios.post(url, body)
    }
}