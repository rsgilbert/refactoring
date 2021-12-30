// move field
const test = require('../test-utils')

class Customer {
    constructor(name, discountRate) {
        this._name = name;
        this._discountRate = discountRate;
        this._contract = new CustomerContract(dateToday());
    }

    get discountRate() { return this._discountRate; }

    becomePreferred() {
        this._discountRate += 0.03;
    }

    applyDiscount(amount) {
        return amount - (amount * this._discountRate);
    }
}

const dateToday = () => new Date();

// customer contract
class CustomerContract {
    constructor(startDate) {
        this._startDate = startDate;
    }
}


test.skip(function applyDiscountTest() {
    const cust = new Customer('Jack', 0.25)
    test.testEqual(cust.discountRate, 0.25);
    test.testEqual(cust.applyDiscount(55), 41.25);
});

test.skip(function becomePreferredTest() {
    const cust = new Customer('Jack', 0.25);
    cust.becomePreferred();
    test.testEqual(cust.discountRate, 0.28);
    test.testEqual(cust.applyDiscount(50), 36);
});

// refactor
// move discount rate field from customer to customer contract

class Customer2 {
    constructor(name, discountRate) {
        this._name = name;
        this._contract = new CustomerContract2(dateToday());
        this.discountRate = discountRate;
    }

    get discountRate() { return this._contract.discountRate; }
    set discountRate(arg) { this._contract.discountRate = arg; }

    becomePreferred() { this.discountRate += 0.03; }
    applyDiscount(amount) {
        return amount - (amount * this.discountRate);
    }
}


class CustomerContract2 {
    constructor(startDate, discountRate) {
        this._startDate = startDate;
        this._discountRate = discountRate;
    }

    get discountRate(){ return this._discountRate; }
    set discountRate(arg) { this._discountRate = arg; }
}


test.test(function applyDiscountTest() {
    const cust = new Customer2('Jack', 0.25)
    test.testEqual(cust.discountRate, 0.25);
    test.testEqual(cust.applyDiscount(55), 41.25);
});

test.test(function becomePreferredTest() {
    const cust = new Customer2('Jack', 0.25);
    cust.becomePreferred();
    test.testEqual(cust.discountRate, 0.28);
    test.testEqual(cust.applyDiscount(50), 36);
});



