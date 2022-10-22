'use strict'

const pgp = require('pg-promise')(/* options */)
const db = pgp('postgres://postgres:postgres@localhost:5432/postgres')

// faux database
// const Person = require('../json/person');
// exports.persons = new Map([
//   [1, new Person(1, 'Name1', 'LastName1', 'email1@email.com')],
//   [2, new Person(2, 'Name2', 'LastName2', 'email2@email.com')],
//   [3, new Person(3, 'Name3', 'LastName3', 'email3@email.com')],
//   [4, new Person(4, 'Name4', 'LastName4', 'email4@email.com')]
// ]);

exports.db = db