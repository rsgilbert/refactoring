const { describe, it } = require("@jest/globals");
const { Employee } = require("./ref-repl-typecode.js");
const assert = require('assert')

describe('original', () => {
    it('create employee - requires correct typecode', function () {
        assert.throws(() => {
            const emp = new Employee('Simon Busungu', 'K');
        });
    });

    it('creates salesman', () => {
        const salesman = new Employee('Simon Busungu', 'salesman');
        assert.strictEqual(salesman._name, 'Simon Busungu');
        assert.strictEqual(salesman._type, 'salesman')
    });

    it('gives correct toString', function() {
        const salesman = new Employee('Simon Busungu', 'salesman');
        assert.strictEqual(salesman.toString(), 'Simon Busungu (salesman)');
    })
});



