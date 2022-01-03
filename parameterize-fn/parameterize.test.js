const { describe, it, expect } = require('@jest/globals')
const { tenPercentRaise, fivePercentRaise, raise } = require('./parameterize')


describe('raise', () => {
    it('ten', () => {
        expect(tenPercentRaise({ salary: 500 })).toBe(550);
    });
    it('five', () => {
        expect(fivePercentRaise({ salary: 500 })).toBe(525);
    });
});

describe('refactor raise', () => {
    it('ten', () => {
        expect(raise({ salary: 500 }, 1.1)).toBe(550);
    });
    it('five', () => {
        expect(raise({ salary: 500 }, 1.05)).toBe(525);
    });
});