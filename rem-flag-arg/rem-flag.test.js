const { describe, it, expect } = require('@jest/globals')
const  { Ref_Rect } = require('./rem-flag')
const Rect = require('./rem-flag')

describe('remove flag', () => {
    it('sets dimension', () => {
        const r = new Rect();
        r.setDimension('width', 200)
        expect(r._width).toBe(200);
        r.setDimension('height', 100);
        expect(r._height).toBe(100);
    });
});


describe('refactor remove flag', () => {
    it('sets dimension', () => {
        const r = new Ref_Rect();
        r.width = 200;
        expect(r._width).toBe(200);
        r['height'] = 100;
        expect(r._height).toBe(100);
    });
});
