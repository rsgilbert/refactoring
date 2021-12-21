// combine functions into transform
const _ = require('lodash')
const assert = require('assert')
const test = require('../test-utils')


function enrichReading(original) {
    const result = _.cloneDeep(original);
    result.baseCharge = calculateBaseCharge(result);
    result.taxableCharge = calculateTaxableCharge(result)
    return result;
}

function acquireReading() { 
    return { customer: 'ivan', quantity: 10, month: 5, year: 2021 }
}

function baseRate() {
    return 5;
}

function calculateBaseCharge(reading) {
    return baseRate(reading.month, reading.year) + reading.quantity;
}

function calculateTaxableCharge(reading) {
    return Math.max(0, reading.baseCharge - taxThreshold(reading))
}

function taxThreshold(aReading) {
    return 1; 
}


const rawReading = acquireReading();
const reading = enrichReading(rawReading);
const baseCharge = reading.baseCharge;
const taxableCharge = calculateTaxableCharge(reading)


test.test(function readingRemainsUnchangedTest(){
    const baseReading = acquireReading();
    const oracle = _.cloneDeep(baseReading)
    enrichReading(baseReading)
    assert.deepStrictEqual(baseReading, oracle)  
})

test.test(function taxableChargeTest() {
    const baseReading= acquireReading();
    const enrichedReading = enrichReading(baseReading);
    test.testEqual(enrichedReading.taxableCharge, 14)
})

