const { describe, it, expect } = require('@jest/globals')
const { Employee, Department } = require('./ref-pull-up-constr.js')


describe('original', function () {
    it('employee', function () {
        const emp = new Employee('Sse', 'E10', 500);
        expect(emp._name).toBe('Sse')
        expect(emp._id).toBe('E10')
        expect(emp._monthlyCost).toBe(500);
    
    });
    it('department', function () {
        const dep = new Department('Isaac', 'Cleaner');
        expect(dep._name).toBe('Isaac')
        expect(dep._staff).toBe('Cleaner')
    });
});

