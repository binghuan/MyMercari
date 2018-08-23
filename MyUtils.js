const DBG = window.location.hostname == "127.0.0.1" ||  window.location.hostname == "localhost";

let getHost = function() {
    return location.protocol + "//" + location.host;
  }