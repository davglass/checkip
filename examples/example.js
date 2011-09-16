#!/usr/bin/env node

var checkip = require(__dirname + '/../lib/check');

checkip(function(ip) {
    console.log('Current IP: ', ip);
});

