import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본 설정

const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

// 2. API 함수들 정리
function fetchNewsList() {
    // return axios.get(config.baseUrl + 'news/1.json');
    return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchJobsList() {
    return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchAskList() {
    return axios.get(`${config.baseUrl}ask/1.json`);
}

/*function fetchList(pageName) {
    return axios.get(`${config.baseUrl}${pageName}/1.json`);
}*/

async function fetchList(pageName) {
    try {
        const res = await axios.get(`${config.baseUrl}${pageName}/1.json`);
        return res;
    } catch (error) {
        console.log(error);
    }
}

function fetchUserInfo(username) {
    return axios.get(`${config.baseUrl}user/${username}.json`);
}

function fetchAskInfo(userid) {
    return axios.get(`${config.baseUrl}item/${userid}.json`);
}
export {
    fetchNewsList,
    fetchJobsList,
    fetchAskList,
    fetchUserInfo,
    fetchAskInfo,
    fetchList
}