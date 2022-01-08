'use strict';
const { describe, it, expect } = require('@jest/globals')
const { Person, Ref_Person } = require('./rm-setting-mtd.js')


describe('original', () => {
    it('creates person', () => {
        const p = new Person();
        p.name = 'Jack';
        p.id = 'J10';
        expect(p.name).toBe('Jack')
        expect(p.id).toBe('J10')
    });
});

describe('refactor', () => {
    it('creates person', () => {
        const p = new Ref_Person('J10');
        p.name = 'Jack';
        expect(p.name).toBe('Jack')
        expect(p.id).toBe('J10')
    });
});