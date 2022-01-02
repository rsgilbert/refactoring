// introduce assertion
const test = require('../test-utils');
const assert = require('assert/strict')


class Customer {
    /**
     * Produces an amount with the discount applied to it
     * There is an assumption that the discountRate is a positive number
     * @param {number} number 
     */
    applyDiscount(number) {
        return (this.discountRate)
            ? number - (this.discountRate * number)
            : number;
    }
}

test.skip(function applyDiscountTest() {
    const cust = new Customer();
    cust.discount = true;
    cust.discountRate = 0.1;
    const discountedAmount = cust.applyDiscount(200);
    test.testEqual(discountedAmount, 180)
});



class Ref_Customer {
    applyDiscount(number) {
        assert.strict.throws(() => { throw Error('d')});
        assert.deepEqual({a: 4}, {a: 4});
        assert.match('heyou', /./g);
        assert.ifError(null);
        assert(this.discountRate >= 0);
        if(this.discountRate) 
            return number - (this.discountRate * number);
        else return number;
    }
}

test.test(function ref_applyDiscountTest() {
    const cust = new Ref_Customer();
    cust.discountRate = 0.1;
    const discountedAmount = cust.applyDiscount(200);
    test.testEqual(discountedAmount, 180)
});

// should fail
test.skip(function ref_applyNegativeDiscountTest() {
    const cust = new Ref_Customer();
    cust.discountRate = -0.1;
    const discountedAmount = cust.applyDiscount(200);
    // test.testEqual(discountedAmount, --)
});