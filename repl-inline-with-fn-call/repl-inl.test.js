// replace inline code with functional call

const { describe, it, expect } = require("@jest/globals");

function hasMAState() {
    const states = ['MA', 'MI', 'MO', 'MU'];
    let appliesToMA = false;
    for(const s of states) {
        if(s === 'MA') appliesToMA = true;
    }
    return appliesToMA;
}


describe('original', () => {
    test('has ma state', () => {
        expect(hasMAState()).toBe(true)
    });
});

// refactor
// replace inline with function call

function ref_hasMAState() {
    const states = ['MA', 'MI', 'MO', 'MU'];
    return states.includes('MA')
}

describe('refactor', () => {
    test('refactor has ma state', () => {
        expect(ref_hasMAState()).toBe(true)
    });
});
