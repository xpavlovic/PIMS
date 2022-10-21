'use strict';
var express = require('express');
var Router = express.Router();

const path = require('path');
var app = module.exports = express();
app.set('view engine','ejs'); 
app.engine('.html', require('ejs').__express);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

const personRepo = require('../repo/personRepository');

Router
  .get('/get/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const result = personRepo.getById(id);
        res.send(result);
  })
  .get('/all', (req, res) => {
        const result = personRepo.getAll();
        res.render('personList', {
            users: result,
            title: "EJS example",
            header: "Some users"
        });
        // res.send(result);
  })
  .get('/remove/:id', (req, res) => {
        const id = parseInt(req.params.id);
        personRepo.remove(id);
        const result = 'Last person remove. Total count: ' + personRepo.persons.size;
        res.send(result);
  })
  .post('/save', (req, res) => {
        const person = req.body;
        const result = personRepo.save(person);
        res.send(result);
  });

module.exports = Router;