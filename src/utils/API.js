import axios from "axios";
const url = 'https://randomuser.me/api/?results=30';

export default {
    search: function () {
        return axios.get(url)
    }
};