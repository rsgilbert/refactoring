const { describe, it } = require('@jest/globals')
const { Male, Female, Person, createFemale, createMale } = require('./rm-sub.js')
const assert = require('assert')


describe('original', function () {
    it('number of males', function () {
        const people = [new Male('a'), new Female('b'), new Male('c')];
        const numberOfMales = people
            .filter(p => p instanceof Male)
            .length
            ;
        assert.strictEqual(numberOfMales, 2)
    });
});


describe('refactor', function () {
    it('number of males', function () {
        const people = [createMale('a'), createFemale('b'), createMale('c')];
        
        const numberOfMales = people
            .filter(p => p.isMale())
            .length
            ;
        assert.strictEqual(numberOfMales, 2)
    });
});