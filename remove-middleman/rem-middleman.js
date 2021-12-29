// remove middleman

const test = require('../test-utils')

class Department {
    get chargeCode(){ return this._chargeCode; }
    set chargeCode(arg) { this._chargeCode = arg; }

    get manager() { return this._manager;}
    set manager(arg) { this._manager = arg; }
}

class Person2 {
    constructor(name) {
        this._name = name;
    }
    get name(){ return this._name;}
    set department(arg) { this._department = arg; }

    // delegating method
    get manager() { return this._department.manager; }
    set manager(arg) { this._department.manager = arg; }
    get departmentChargeCode() { return this._department.chargeCode; }
    set departmentChargeCode(arg) { this._department.chargeCode = arg; }
}


test.skip(function personTest() {
    const person = new Person2();
    const department = new Department();
    person.department = department;
    person.manager = 'Angela'
    person.departmentChargeCode = 'C100'
    test.testEqual(person.manager, 'Angela')
    test.testEqual(person.departmentChargeCode, 'C100')

})

// refactor, remove middleman methods manager and departmentChargeCode

class Person3 {
    constructor(name) {
        this._name = name;
    }
    get name(){ return this._name;}

    // step 1, make an accessor for the delegate
    get department() { return this._department; }
    set department(arg) { this._department = arg; }

    // delegating methods, Step 3: remove delegating methods
}


test.test(function ref_personTest() {
    const person = new Person3();
    const department = new Department();
    person.department = department;
    // Step 2: modify clients to use delegate directly
    person.department.manager = 'Angela'
    person.department.chargeCode = 'C100'
    test.testEqual(person.department.manager, 'Angela')
    test.testEqual(person.department.chargeCode, 'C100')

})


