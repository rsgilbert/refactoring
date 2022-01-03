const { it, beforeEach, expect } = require("@jest/globals")

const { robberyAlert, ref_findPerson, ref_robberyAlert } = require('./sep-query.js');


describe('robberyAlert', () => {
    it('produces Don', () => {
        const people = ['Mark', 'Don']
        expect(robberyAlert(people)).toBe('Don');
    });
    it('produces John', () => {
        const people = ['John', 'Don']
        expect(robberyAlert(people)).toBe('John');
    });
    it('produces blank', () => {
        const people = ['Cain', 'ABel']
        expect(robberyAlert(people)).toBe('');
    });
    it('logs alarm', () => {
        console.log = jest.fn();
        robberyAlert(['John']);
        expect(console.log).toHaveBeenCalled();
    });
});

describe('refactor robberyAlert', () => {
    it('produces Don', () => {
        const people = ['Mark', 'Don']
        const person = ref_findPerson(people);
        expect(person).toBe('Don');
    });
    it('produces John', () => {
        const people = ['John', 'Don'];
        const person = ref_findPerson(people);
        expect(person).toBe('John');
    });
    it('produces blank', () => {
        const people = ['Cain', 'ABel']
        expect(ref_findPerson(people)).toBe('');
    });
    it('logs alarm', () => {
        console.log = jest.fn();
        ref_robberyAlert(['John']);
        expect(console.log).toHaveBeenCalled();
    });
})