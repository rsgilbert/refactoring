// hide delegate
const test = require('../test-utils')

class Person {
    constructor(name) {
        this._name = name;
    }
    get name(){ return this._name;}
    get department(){ return this._department; }
    set department(arg) { this._department = arg; }
}

class Department {
    get chargeCode(){ return this._chargeCode; }
    set chargeCode(arg) { this._chargeCode = arg; }

    get manager() { return this._manager;}
    set manager(arg) { this._manager = arg; }
}


test.skip(function personTest() {
    const person = new Person();
    const department = new Department();
    person.department = department;
    person.department.manager = 'Angela'
    person.department.chargeCode = 'C100'
    test.testEqual(person.department.manager, 'Angela')
    test.testEqual(person.department.chargeCode, 'C100')

})

// refactor


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




test.test(function ref_personTest() {
    const person = new Person2();
    const department = new Department();
    person.department = department;
    person.manager = 'Angela'
    person.departmentChargeCode = 'C100'
    test.testEqual(person.manager, 'Angela')
    test.testEqual(person.departmentChargeCode, 'C100')

})