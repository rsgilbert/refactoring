const { it, describe, expect } = require("@jest/globals");
const HeatingPlan = require("./preserve-whole.js")

describe('original', () => {
    it('heating plan 1', () => {
        const room = {
            daysTempRange: {
                low: 3, high: 6
            }
        }
        const plan = new HeatingPlan(room.daysTempRange);
        const bottom1 = 4;
        const top1 = 5;
        expect(plan.withinRange(bottom1, top1)).toBe(true);
    })

    it('heating plan 2', () => {
        const room = {
            daysTempRange: {
                low: 3, high: 6
            }
        }
        const plan = new HeatingPlan(room.daysTempRange);
        const bottom1 = 1;
        const top1 = 5;
        expect(plan.withinRange(bottom1, top1)).toBe(false);
    })
});


describe('refactor', () => {
    it('heating plan 1', () => {
        const room = {
            daysTempRange: {
                low: 3, high: 6
            }
        }
        const plan = new HeatingPlan(room.daysTempRange);
        const bottom1 = 4;
        const top1 = 5;
        expect(plan.ref_withinRange({ bottom: bottom1, top: top1 })).toBe(true);
    })

    it('heating plan 2', () => {
        const room = {
            daysTempRange: {
                low: 3, high: 6
            }
        }
        const plan = new HeatingPlan(room.daysTempRange);
        const range = { bottom: 1, top: 5 }
        expect(plan.ref_withinRange(range)).toBe(false);
    })
});



// Use a couple of refactorings to perform this refactoring.
describe('refactor 2, a variation', () => {
    // Applied Move Function to move it to HeatingPlan class.
    // function xx_isWithinRange(plan, range) {
    //     return plan.withinRange(range.bottom, range.top);
    // }
    it('heating plan 1', () => {
        const room = {
            daysTempRange: {
                low: 3, high: 6
            }
        }
        const plan = new HeatingPlan(room.daysTempRange);
        const bottom1 = 4;
        const top1 = 5;
        const range = { bottom: bottom1, top: top1 }

        const isWithinRange = plan.xx_isWithinRange(range);
        expect(isWithinRange).toBe(true);
    })



    it('heating plan 2', () => {
        const room = {
            daysTempRange: {
                low: 3, high: 6
            }
        }
        const plan = new HeatingPlan(room.daysTempRange);
        const bottom1 = 1;
        const top1 = 5;
        const range = { bottom: bottom1, top: top1 }
        const isWithinRange = plan.xx_isWithinRange(range);
        expect(isWithinRange).toBe(false);
    })
});