'use strict';

// const Person = require('../json/person');
var db = require('../db/db.js');

class PersonRepository {
    constructor() {
        this.persons = db.persons;
        // this.persons = new Map([
        //     [1, new Person(1, 'FN1', 'LN1', 'email1@email.na')],
        //     [2, new Person(2, 'FN2', 'LN2', 'email2@email.na')],
        //     [3, new Person(3, 'FN3', 'LN3', 'email3@email.na')],
        //     [4, new Person(4, 'FN4', 'LN4', 'email4@email.na')]
        // ]);
    }

    getById(id) {
        return this.persons.get(id);
    }

    getAll() {
        return Array.from(this.persons.values());
    }

    remove(id) {
        this.persons.delete(this.persons.get(id))
        // const keys = Array.from(this.persons.keys());
        // this.persons.delete(keys[keys.length - 1]);
    }

    save(person) {
        if (this.getById(person.id) !== undefined) {
            this.persons[person.id] = person;
            return "Updated Person with id=" + person.id;
        }
        else {
            this.persons.set(person.id, person);
            return "Added Person with id=" + person.id;
        }
    }
}

const personRepository = new PersonRepository();

module.exports = personRepository;