var request = require('request');
var add = "idddd";

var options = {
    url: "http://localhost:3000/users/items",
    method: 'GET',
    json: true
};

var options2 = {
    url: "http://localhost:3000/users/items/add/" + add,
    method: 'GET',
    json: false
};

var options3 = {
    url: "http://localhost:3000/users/items/remove/" + add,
    method: 'GET',
    json: false
};

request(options, function(error, response, body){
    if(!error && response.statusCode === 200){
        return console.log(JSON.stringify(body))
    }
    console.log(error + " : " + JSON.stringify(body))
});