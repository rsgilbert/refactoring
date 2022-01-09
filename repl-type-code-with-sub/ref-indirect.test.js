const { describe, it } = require("@jest/globals");
const { Employee } = require("./ref-indirect.js");
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
        assert.strictEqual(salesman.typeString, 'salesman');
        assert.strictEqual(String(salesman), 'Simon Busungu (Salesman)')
    });

    it('create engineer', () => {
        const engineer = new Employee('Simon Busungu', 'engineer');
        assert.strictEqual(engineer._name, 'Simon Busungu');
        assert.strictEqual(engineer.typeString, 'engineer');
        assert.strictEqual(String(engineer), 'Simon Busungu (Engineer)')
    });
});



