var config = require('./config');
var Firebase = require('firebase');
var apibase = require('apibase')((new Firebase(config.FB_URL)).child(config.API_PATH));

apibase.auth(config.FB_SECRET);

apibase.greeting = function (username) {
    return "Hello, " + username;
};

apibase.publish();
