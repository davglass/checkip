#!/usr/bin/env node

var http = require('http'),
    regEx = /Current IP Address: (\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b)/,
    url = 'http://checkip.dyndns.org/',
    isRequired = (process.mainModule.filename !== __filename);


var getIP = function(cb) {
    http.get({
        host: 'checkip.dyndns.org',
        path: '/'
    }, function(res) {
        var html = '';
        res.on('data', function(chunk) {
            html += chunk;
        });
        res.on('end', function() {
            var ip = html.match(regEx)[1];
            cb(ip);
        });
    });
};

module.exports = getIP;

if (!isRequired) {
    getIP(console.log);
}

