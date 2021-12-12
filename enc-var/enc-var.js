// 'use strict'
let defaultOwner = { firstName: 'Mary', lastName: 'Tower' }
const assert = require('assert');
const { testEqual } = require('../test-utils');
const test = require('../test-utils')

// Refactor
let defaultOwnerData = { firstName: 'Mary', lastName: 'Tower'}
function defaultOwner2() { return Object.assign({}, defaultOwnerData); }
function setDefaultOwner(arg) { defaultOwner = arg; }

// const owner1 = defaultOwner2()
// assert.strictEqual(owner1.firstName, 'Mary')
// const owner2 = defaultOwner2()
// owner2.lastName = 'Queen'
// assert.strictEqual(owner1.lastName, 'Tower')

// Prevent changes on record structure
class Person {
    #lastName = '';
    #firstName = '';
    constructor(data) {
        this.#firstName = data.firstName;
        this.#lastName = data.lastName;
    }
    get lastName() { return this.#lastName; }
    get firstName() { return this.#firstName; }
}

const p = new Person({ firstName: 'Mark', lastName: 'Jane' });
// console.log(p.firstName)

test.test(function personTest() {
    test.testEqual(p.lastName, 'Jane')
    // not allowed since no setter
    p.lastName = 'Tim'
    test.testNotEqual(p.lastName, 'Tim')
    test.testEqual(p.lastName, 'Jane')
})

test.summarize()
