const DBG = window.location.hostname == "127.0.0.1" || window.location.hostname == "localhost";

let getHost = function () {
    if (location.host == "binghuan.github.io") {
        return location.protocol + "//" + location.host + location.pathname;
    } else {
        return location.protocol + "//" + location.host + "/";
    }
}