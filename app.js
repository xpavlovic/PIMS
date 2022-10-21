const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const path = require('path');

// const app = express();
var app = module.exports = express();
var db = require('./db/db.js')

// register JSON parser middleware
app.use(bodyParser.json());

app.set('view engine','ejs'); 
app.engine('.html', require('ejs').__express);
app.set('views', path.join(__dirname, 'views'));

// Without this you would need to
// supply the extension to res.render()
// ex: res.render('users.html').
app.set('view engine', 'html');

// exports.engine = 'ejs';
// exports.before = function(req, res, next){
//     var pet = db.pets[req.params.pet_id];
//     if (!pet) return next('route');
//     req.pet = pet;
//     next();
// };

const server = http.createServer(app);

const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);

app.get('/', function(req, res){
    // console.log("hello")
    // res.render('index', {
    //     users: users,
    //     title: "EJS example",
    //     header: "Some users"
    // });
    // res.sendFile(path.join(__dirname+'/views/index.ejs'));
    res.render('index')
});

app.get("/about", function (req, res) {
    res.render('about', {
        // users: users,
        title: "EJS example",
        header: "Some users"
    });
    // res.sendFile(path.join(__dirname+'/views/about.html'));
});

server.listen(3000, function(){
    console.log("Server is listening on port: 3000");
});
