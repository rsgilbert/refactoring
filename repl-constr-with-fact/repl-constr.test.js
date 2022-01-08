const { describe, expect, it } = require('@jest/globals')
const { Employee, createEmployee, createEngineer } = require('./repl-constr.js')



describe('original', function() {
    it('employee', function () {
        const document = { empType: 'E' }
        const candidate = new Employee('James', document.empType);
        expect(candidate.type).toBe('Employee')
        expect(candidate.name).toBe('James')
    });

    it('lead engineer', function () {
        const document =  { leadEngineer: "Mary"}
        const leadEngineer = new Employee(document.leadEngineer, 'E');
        expect(leadEngineer.name).toBe('Mary')
        expect(leadEngineer.type).toBe('Employee')
    });
});



describe('refactor', function() {
    it('employee', function () {
        const document = { empType: 'E' }
        const candidate = createEmployee('James', document.empType);
        expect(candidate.type).toBe('Employee')
        expect(candidate.name).toBe('James')
    });

    it('lead engineer', function () {
        const document =  { leadEngineer: "Mary"}
        const leadEngineer = createEngineer(document.leadEngineer);
        expect(leadEngineer.name).toBe('Mary')
        expect(leadEngineer.type).toBe('Employee')
    });
});