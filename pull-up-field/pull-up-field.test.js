const { describe, it, expect } = require('@jest/globals')
const { Teacher, Engineer } = require('./pull-up-field.js')


describe('original', function () {
    it('teacher', function () {
        const teacher = new Teacher();
        teacher.teacherName = 'Mary';
        expect(teacher.teacherName).toBe('Mary')
    });
    it('engineer', function () {
        const engineer = new Engineer();
        engineer.name = 'Musoke';
        expect(engineer.name).toBe('Musoke')
    });
});