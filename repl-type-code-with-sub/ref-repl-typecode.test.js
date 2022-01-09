const { describe, it } = require("@jest/globals");
const { Employee, createEmployee, Salesman } = require("./ref-repl-typecode.js");
const assert = require('assert');

describe('original', () => {
    it('create employee - requires correct typecode', function () {
        assert.throws(() => {
            const emp = createEmployee('Simon Busungu', 'K');
        });
    });

    it('creates salesman using constructor', () => {
        const salesman = new Salesman('Simon Busungu');
        assert.strictEqual(salesman._name, 'Simon Busungu');
        assert.strictEqual(salesman.type, 'salesman')
    });

    it('creates salesman using factory', () => {
        const salesman = createEmployee('Simon Busungu', 'salesman');
        assert.strictEqual(salesman._name, 'Simon Busungu');
        assert.strictEqual(salesman.type, 'salesman')
    });

    it('gives correct toString', function() {
        const salesman = createEmployee('Simon Busungu', 'salesman');
        assert.strictEqual(salesman.toString(), 'Simon Busungu (salesman)');
    });

    test('create engineer', () => {
        const salesman = createEmployee('Simon Busungu', 'engineer');
        assert.strictEqual(salesman._name, 'Simon Busungu');
        assert.strictEqual(salesman.type, 'engineer');
        assert.strictEqual(salesman.toString(), 'Simon Busungu (engineer)');

    });
    test('create manager', () => {
        const salesman = createEmployee('Simon Busungu', 'manager');
        assert.strictEqual(salesman._name, 'Simon Busungu');
        assert.strictEqual(salesman.type, 'manager');
        assert.strictEqual(salesman.toString(), 'Simon Busungu (manager)');
    });
});



