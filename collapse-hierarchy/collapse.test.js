const { describe, it } = require('@jest/globals')
const { Salesman, Emp, Ref_Employee } = require('./collapse.js')
const assert = require('assert')

describe('original', function () {
    it('emp', () => {
        const e = new Emp();
        e.name = 'toney'
        assert.strictEqual(e.name, 'toney')
    });

    it('salesman', () => {
        const s = new Salesman();
        s.salesCode = 'S1';
        assert.strictEqual(s.salesCode, 'S1');
    });
});

describe('refactor', function() {
    it('Ref_Employee', () => {
        const e = new Ref_Employee();
        e.name = 'toney'
        assert.strictEqual(e.name, 'toney');
        e.salesCode = 'S1';
        assert.strictEqual(e.salesCode, 'S1');
    })
})