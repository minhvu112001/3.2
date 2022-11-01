var express = require('express');
var app = express();

app.set('views' , './views');
app.set('view engine', 'pug');

app.get('/', function(req, res){
    res.render('two',{
        title: 'Page Two',
        message: 'Page Two by pug!'
    });
});

var memberApi = express.Router();

memberApi.get('/', function(req, res){
    res.send('Member page!');
});
memberApi.get('/profile', function(req, res){
    res.send('Member profile page!');
});
memberApi.get('/changepassword', function(req, res){
    res.send('Member change password page!');
});

var adminApi = express.Router();
adminApi.get('/', function(req, res){
    res.send('Admin page!');
});
app.use('/api/member' , memberApi);
app.use('/api/admin' , adminApi);
app.use(express.static(__dirname + '/public'));
app.listen(8080);