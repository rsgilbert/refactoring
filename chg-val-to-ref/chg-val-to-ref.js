// change value to reference
const test = require('../test-utils');
const { registerCustomer, initialize } = require('./repository');

class Order {
    constructor(data) {
        this._number = data.number;
        this._customer = new Customer(data.customer);
    }
    get number() { return this._number; }
    get customer() { return this._customer; }
}

class Customer {
    constructor(id) {
        this._id = id;
    }
    get id() { return this._id; }
}

// module.exports = Customer;

test.test(function orderTest() {
    const order = new Order({ number: 4, customer: 'A1' })
    test.testEqual(order.customer.id, 'A1');
    test.testEqual(order.number, 4);
});

// refactor
// change customer value to reference

class Order2 {
    constructor(data) {
        this._number = data.number;
        this._customer = registerCustomer(data.customer);
    }
    get number() { return this._number; }
    get customer() { return this._customer; }
}

test.test(function ref_orderTest() {
    initialize();
    const order = new Order2({ number: 4, customer: 'A1' })
    test.testEqual(order.customer.id, 'A1');
    test.testEqual(order.number, 4);
});


test.test(function ref_customerReferenceTest() {
    initialize();
    const order1 = new Order2({ number: 4, customer: 'A1' })
    const order2 = new Order2({ number: 10, customer: 'A1'})
    test.testEqual(order1.customer, order2.customer);
    order1.customer.fname = 'Tom';
    test.testEqual(order2.customer.fname, 'Tom');
});

