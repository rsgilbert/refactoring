const { describe, it, expect } = require('@jest/globals')
const { Ref_HeatingPlan, HeatingPlan } = require('./repl-query.js')


const therm = {
    selectedTemperature: 10
}

describe('original', () => {
    it('targetTemperature max', () => {
        const plan = new HeatingPlan(5, 8);
        expect(plan.targetTemperature).toBe(8);
    }); 
    it('targetTemperature min', () => {
        const plan = new HeatingPlan(15, 28);
        expect(plan.targetTemperature).toBe(15);
    });
});

describe('refactor', () => {
    it('targetTemperature max', () => {
        const plan = new Ref_HeatingPlan(5, 8);
        expect(plan.targetTemperature(therm.selectedTemperature)).toBe(8);
    }); 
    it('targetTemperature min', () => {
        const plan = new Ref_HeatingPlan(15, 28);
        expect(plan.targetTemperature(therm.selectedTemperature)).toBe(15);
    });
});