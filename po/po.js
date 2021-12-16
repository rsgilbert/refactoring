// introduce parameter object
const { testEqual } = require('../test-utils')
const test = require('../test-utils')

function amountInvoice(startDate, endDate){}
function amountReceived(startDate,endDate){}
function amountOverdue(startDate, endDate){}

// refactor
function ref_amountInvoiced(aDateRange){}
function ref_amountReceived(aDateRange){}
function ref_amountOverdue(aDateRange){}

// temperature range 
const station = { 
    name: 'ZBI',
    readings: [
        { temp: 47, time: '2016-11-10 09:10' },
        { temp: 57, time: '2016-11-10 09:20' },
        { temp: 49, time: '2016-11-10 09:30' },
        { temp: 50, time: '2016-11-10 09:40' },
        { temp: 34, time: '2016-11-10 09:50' },
    ]
}

function readingsOutsideRange(station, min, max) {
    return station.readings 
        .filter(r => r.temp < min || r.temp > max)
}

const operatingPlan = {
    temperatureFloor: 47,
    temperatureCeiling: 55
}
// refactor operatingPlan
const ref_operatingPlan = { 
    temperatureRange: new NumberRange(47, 55)
}

// console.log(readingsOutsideRange(
//     station, 
//     operatingPlan.temperatureFloor,
//     operatingPlan.temperatureCeiling
// ))

// Refactor 

// declare a class for the combined data 
// TODO: Add a value-based equality method to make it a true value object.
class NumberRange {
    #data = {};
    constructor(min, max){
        this.#data.min = min;
        this.#data.max = max;
    }
    get min() { return this.#data.min; }
    get max() { return this.#data.max; }
    /**
     * @param arg {number}
     */
    contains(arg) {
        return arg >= this.min && arg <= this.max;
    } 
}

/**
 * 
 * @param {{ name: string, readings: any[]}} station 
 * @param {*} min 
 * @param {*} max 
 * @param {NumberRange} range 
 * @returns {any[]}
 */
function ref_readingsOutsideRange(station, range) {
    return station.readings 
        .filter(r => !range.contains(r.temp))
}

// test
test.test(function readingsOutsideRangeTest() {
    const result = ref_readingsOutsideRange(
        station, 
        new NumberRange(operatingPlan.temperatureFloor, operatingPlan.temperatureCeiling))
    testEqual(result.length, 2)
    testEqual(result[0].temp, 57)
    testEqual(result[1].temp, 34)
})













