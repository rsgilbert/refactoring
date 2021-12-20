const test = require('../test-utils')
function base0(aReading) {}
function taxableCharge0(aReading){}
function calculateBaseCharge0(aReading){}

// refactor
class Reading0 {
    base(){}
    taxableCharge(){}
    calculateBaseCharge(){}
}


// refactor 2
function baseRate() {
    return 5;
}

// Step 1: Encapsulate Record

class Reading1 {
    #customer;
    #quantity;
    #month;
    #year;
    constructor(data) {
        this.#customer = data.customer;
        this.#quantity = data.quantity;
        this.#month = data.month;
        this.#year = data.year;
    }
    get customer() { return this.#customer; }
    get quantity() { return this.#quantity; }
    get month() { return this.#month; }
    get year() { return this.#year; }

    /**
     * Getter for base charge.
     * With this naming, the client of the class cant tell whether base
     * charge is a field or a deried value. This is a good thing 
     * and its called the Uniform Access Principle.
     * @returns { number } base charge
     */
    get baseCharge() {
        return baseRate(this.#month, this.#year) + this.#quantity;
    }

    /**
     * Getter for taxable charge
     * @returns { number } taxable charge
     */
    get taxableCharge() {
        return Math.max(0, this.baseCharge - taxThreshold(this))
    }
    
}

function acquireReading() { 
    return { customer: 'ivan', quantity: 10, month: 5, year: 2021 }
}

const rawReading = acquireReading();
const aReading = new Reading1(rawReading)
const basicChargeAmount = aReading.baseCharge;



test.test(function taxableChargeTest() {
    const aReading = new Reading1(acquireReading());
    const taxableCharge = aReading.taxableCharge;
    test.testEqual(taxableCharge, 14)
})


function taxThreshold(aReading) {
    return 1; 
}


