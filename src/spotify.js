// https://developer.spotify.com/
//documentation/web-playback-sdk/quick-start/#

export const authEndpoint = 
"http://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "68dddbc7c31540968af96bb54a8f824f";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;
    }, {});
};

export const LoginUrl = `${authEndpoint}?client_id=${clientId}
&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}
&response_type=token&show_dialog=true`;