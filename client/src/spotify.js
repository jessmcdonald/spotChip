import axios from "axios";


//get parameters from hash of URL
export const getHashParams = () => {
    const hashParams = {};
    let e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
};

//get access token

//refresh access token


const params = getHashParams();
const access_token = params.access_token;
const refresh_token = params.access_token;
const error = params.error;
const token = access_token;
const headers = { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json', }

//get user
export const getUserInfo = () => {
    axios.get("https://api.spotify.com/v1/me", {headers})
};