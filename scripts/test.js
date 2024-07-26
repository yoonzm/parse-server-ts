const Parse = require('parse/node');

Parse.initialize('myAppId');
Parse.serverURL = 'http://localhost:5000/parse';

Parse.Cloud.run('hello', {
    message: 'world'
}).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});

const Test = Parse.Object.extend('Test');
new Test().save({
    name: 'test_' + new Date().getTime()
}).then((result) => {
    console.log(result);
})
