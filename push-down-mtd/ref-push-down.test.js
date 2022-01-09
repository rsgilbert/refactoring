const { describe, it, expect } = require('@jest/globals')
const { EmployeeParty, Party, DepartmentParty } = require('./ref-push-down.js')


describe('refactor', function() {
    it('department NO annual cost', function() {
        const p = new DepartmentParty();
        // p.monthlyCost = 50;
        // expect(p.annualCost).toBe(600);
    });

    it('employee annual cost', function() {
        const p = new EmployeeParty();
        p.monthlyCost = 50;
        expect(p.annualCost).toBe(600);
    });
});