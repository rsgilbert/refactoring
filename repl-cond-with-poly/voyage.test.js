const { describe, expect } = require('@jest/globals');
const { rating } = require('./voyage')



describe('rating', () => {
    const history = [
        { zone: 'east-indies', profit: 5 },
        { zone: 'west-indies', profit: 15 },
        { zone: 'china', profit: -2 },
        { zone: 'west-africa', profit: 7 },   
    ];
    test('rating', () => {
        const voyage = { zone: 'west-indies', length: 10 }
        const r = rating(voyage, history);
        expect(r).toBe('B');
    });

    test('china', () => {
        const voyage = { zone: 'china', length: 10 }
        const r = rating(voyage, history);
        expect(r).toBe('A');
    });
});