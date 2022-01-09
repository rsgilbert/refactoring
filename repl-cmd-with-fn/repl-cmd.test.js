const { describe, it, expect } = require('@jest/globals')
const { ChargeCalculator, charge } = require('./repl-cmd.js') 


describe('original', () => {
    it('month charge', () => {
        const customer = { baseRate: 200 }
        const usage = 100;
        const provider = { connectionCharge: 40 }
        const chargeCmd = new ChargeCalculator(customer, usage, provider);
        const monthCharge = chargeCmd.execute();
        expect(monthCharge).toBe(20040)
    });
});


describe('refactor', () => {
    it('month charge fn', () => {
        const customer = { baseRate: 200 }
        const usage = 100;
        const provider = { connectionCharge: 40 }
        // const chargeCmd = new ChargeCalculator(customer, usage, provider);
        const monthCharge = charge(customer, usage, provider);
        expect(monthCharge).toBe(20040)
    });
});

