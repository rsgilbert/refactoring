const { describe, it, expect } = require("@jest/globals");

const { Ref_Order, Order } = require('./repl-para.js')

describe('original', () => {
    it('final price', () => {
        let order1 = new Order(4, 150);
        expect(order1.finalPrice).toBe(570)
        let order2 = new Order(224, 150);
        expect(order2.finalPrice).toBe(30240)
    });
})

describe('refactor', () => {
    it('final price', () => {
        let order1 = new Ref_Order(4, 150);
        expect(order1.finalPrice).toBe(570)
        let order2 = new Ref_Order(224, 150);
        expect(order2.finalPrice).toBe(30240)
    });
})