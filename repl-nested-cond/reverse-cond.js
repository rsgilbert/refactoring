// reverse conditions
// We often do Replace Nested Conditional with Guard
// clauses by reversing the conditional expressions.
const test = require('../test-utils')


function adjustedCapital(instrument) {
    let result = 0;
    if(instrument.capital > 0) {
        if(instrument.interestRate > 0 && instrument.duration > 0) {
            result = (instrument.income / instrument.duration) * instrument.capital * (1 + instrument.interestRate);
        }
    }
    return result;
}

test.skip(function adjustedCapitalTest() {
    const instrument1 = { 
        capital: 500, interestRate: 0.15, duration: 5, income: 200 }
    test.testEqual(adjustedCapital(instrument1), 23000)
    const instrument2 = { 
        capital: 0, interestRate: 0.15, duration: 5, income: 200 }
    test.testEqual(adjustedCapital(instrument2), 0);
    const instrument3 = { 
        capital: 500, interestRate: 0, duration: 5, income: 200 }
    test.testEqual(adjustedCapital(instrument3), 0)
    const instrument4 = { 
        capital: 500, interestRate: 0, duration: -1, income: 200 }
    test.testEqual(adjustedCapital(instrument4), 0)
});



function ref_adjustedCapital(instrument) {
    // reverse conditional
    if(instrument.capital <= 0) {
        return 0;
    }
    // reverse conditional
    if(instrument.interestRate <= 0 || instrument.duration <= 0) {
        return 0;
    }
    const result = (instrument.income / instrument.duration) * instrument.capital * (1 + instrument.interestRate);
    return result;
}

test.test(function ref_adjustedCapitalTest() {
    const instrument1 = { 
        capital: 500, interestRate: 0.15, duration: 5, income: 200 }
    test.testEqual(ref_adjustedCapital(instrument1), 23000)
    const instrument2 = { 
        capital: 0, interestRate: 0.15, duration: 5, income: 200 }
    test.testEqual(ref_adjustedCapital(instrument2), 0);
    const instrument3 = { 
        capital: 500, interestRate: 0, duration: 5, income: 200 }
    test.testEqual(ref_adjustedCapital(instrument3), 0)
    const instrument4 = { 
        capital: 500, interestRate: 0, duration: -1, income: 200 }
    test.testEqual(ref_adjustedCapital(instrument4), 0)
});






