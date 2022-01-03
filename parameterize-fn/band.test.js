const { describe, it, expect } = require('@jest/globals')
const { bandCharge, ref_bandCharge } = require('./band.js')


describe('band', () => {
    it('band charge', () => {
        const charge = bandCharge(500);
        expect(charge).toBeCloseTo(29)
    });
    it('band charge', () => {
        const charge = bandCharge(800);
        expect(charge).toBeCloseTo(50);
    });
    it('band charge', () => {
        const charge = bandCharge(0);
        expect(charge).toBeCloseTo(0)
    });
    it('band charge', () => {
        const charge = bandCharge(10);
        expect(charge).toBeCloseTo(0.3);
    });
    it('band charge', () => {
        const charge = bandCharge(150);
        expect(charge).toBeCloseTo(5.5);
    });
});


describe('refactor band', () => {
    it('refactor band charge', () => {
        const charge = ref_bandCharge(500);
        expect(charge).toBeCloseTo(29)
    });
    it('band charge', () => {
        const charge = ref_bandCharge(800);
        expect(charge).toBeCloseTo(50);
    });
    it('band charge', () => {
        const charge = ref_bandCharge(0);
        expect(charge).toBeCloseTo(0)
    });
    it('band charge', () => {
        const charge = ref_bandCharge(10);
        expect(charge).toBeCloseTo(0.3);
    });
    it('band charge', () => {
        const charge = ref_bandCharge(150);
        expect(charge).toBeCloseTo(5.5);
    });
});