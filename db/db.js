'use strict'
const Person = require('../json/person');

// faux database

var pets = exports.pets = [];

pets.push({ name: 'Tobi', id: 0 });
pets.push({ name: 'Loki', id: 1 });
pets.push({ name: 'Jane', id: 2 });
pets.push({ name: 'Raul', id: 3 });

var users = exports.users = [];

users.push({ name: 'TJ', pets: [pets[0], pets[1], pets[2]], id: 0  });
users.push({ name: 'Guillermo', pets: [pets[3]], id: 1 });
users.push({ name: 'Nathan', pets: [], id: 2 });

var persons = exports.persons = new Map([
  [1, new Person(1, 'Name1', 'LastName1', 'email1@email.com')],
  [2, new Person(2, 'Name2', 'LastName2', 'email2@email.com')],
  [3, new Person(3, 'Name3', 'LastName3', 'email3@email.com')],
  [4, new Person(4, 'Name4', 'LastName4', 'email4@email.com')]
]);