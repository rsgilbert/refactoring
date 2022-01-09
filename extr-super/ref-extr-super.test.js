const { describe, test } = require('@jest/globals');
const { Department, Employee } = require('./ref-extr-super.js')
const assert = require('assert')


describe('original', function () {
    test('employee', function () {
        const emp = new Employee('Jane', 'E1', 450);
        assert.strictEqual(emp.annualCost, 5400);
        assert.strictEqual(emp.name, 'Jane');
        assert.strictEqual(emp.id, 'E1');
    });

    test('Department', function () {
        const e1 = new Employee('K', 'E2', 200);
        const e2 = new Employee('D', 'E3', 400);
        const dep = new Department('Finance', [e1, e2]);
        assert.strictEqual(dep.monthlyCost, 600);
        assert.strictEqual(dep.annualCost, 7200);
        assert.strictEqual(dep.name, 'Finance');
        assert.deepStrictEqual(dep.staff, [e1, e2]);
    });
});

