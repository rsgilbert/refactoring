const { describe, it, beforeEach } = require("@jest/globals")
const { Site, customerName, weeksDeliquent, plan } = require("./intro-special")


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
});


describe('site customer is John', () => {
    let site;
    beforeEach(() => {
        site = new Site();
        site.amount = 700;
        site.customer = 'John'
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
});