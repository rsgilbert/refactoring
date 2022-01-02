const { describe, it, beforeEach, expect } = require("@jest/globals")
const { Site, customerName, weeksDeliquent, plan, doublePlan, paymentHistorySize } = require("./ref-intro-special")


describe('site unknown customer', () => {
    let site;
    beforeEach(() => {
        site = new Site();
        site.amount = 700;
    })
    it('customerName', () => {
        expect(customerName(site)).toBe('occupant');
    });
    it('plan', () => {
        expect(plan(site)).toBe(-1);
    });
    it('weeksDeliquent', () => {
        expect(weeksDeliquent(site)).toBe(-1);
    });

    it('double plan', () => {
        doublePlan(site);
        expect(plan(site)).toBe(-1)
    });
    it('paymentHistorySize', () => {
        expect(paymentHistorySize(site)).toBe('None')
    });
});

describe('site customer is John', () => {
    let site;
    beforeEach(() => {
        site = new Site();
        site.customer = 'John'
        site.amount = 700;
    })
    it('customerName', () => {
        expect(customerName(site)).toBe('John');
    });
    it('plan', () => {
        expect(plan(site)).toBe(700);
    });
    it('weeksDeliquent', () => {
        expect(weeksDeliquent(site)).toBe(100);
    });
    it('double plan', () => {
        doublePlan(site);
        expect(plan(site)).toBe(1_400)
    });
    it('paymentHistorySize', () => {
        expect(paymentHistorySize(site)).toBe('Huge')
    });
});