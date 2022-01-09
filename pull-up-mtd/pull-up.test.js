const { describe, it, expect } = require('@jest/globals')
const { EmployeeParty, Party, DepartmentParty } = require('./pull-up.js')


describe('original', function() {
    it('department annual cost', function() {
        const p = new DepartmentParty();
        p.monthlyCost = 50;
        expect(p.totalAnnualCost).toBe(600);
    });

    it('employee annual cost', function() {
        const p = new EmployeeParty();
        p.monthlyCost = 50;
        expect(p.annualCost).toBe(600);
    });
});