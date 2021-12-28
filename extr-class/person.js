const test = require('../test-utils')


class Person {
    get name() { return this._name; }
    set name(arg) { return this._name = arg; }
    get telephoneNumber() {
        return `${this.officeAreaCode} ${this.officeNumber}`
    }
    get officeAreaCode() { return this._officeAreaCode; }
    set officeAreaCode(arg) { this._officeAreaCode = arg; }

    get officeNumber() { return this._officeNumber; }
    set officeNumber(arg) { this._officeNumber = arg; }
}


test.skip(function personTest() {
    const p1 = new Person();
    p1.name = 'John'
    p1.officeAreaCode = '256'
    p1.officeNumber = '703512563'
    // console.log(p1.telephoneNumber)
    test.testEqual(p1.name, 'John')
    test.testEqual(p1.telephoneNumber, '256 703512563')
});

// refactor 

class Person2 {
    constructor() {
        this._telephoneNumber = new TelephoneNumber();
    }
    get name() { return this._name; }
    set name(arg) { return this._name = arg; }
    get telephoneNumber() {
        return this._telephoneNumber.telephoneNumber;
    }
    get officeAreaCode() { return this._telephoneNumber.areaCode; }
    set officeAreaCode(arg) { this._telephoneNumber.areaCode = arg; }

    get officeNumber() { return this._telephoneNumber.officeNumber; }
    set officeNumber(arg) { this._telephoneNumber.officeNumber = arg; }
}

class TelephoneNumber {
    get telephoneNumber() {
        return `${this.areaCode} ${this.officeNumber}`
    }

    get areaCode() { return this._officeAreaCode; }
    set areaCode(arg) { this._officeAreaCode = arg; }

    get officeNumber() { return this._officeNumber; }
    set officeNumber(arg) { this._officeNumber = arg; }
}

test.test(function ref_personTest() {
    const p1 = new Person2();
    p1.name = 'John'
    p1.officeAreaCode = '256'
    p1.officeNumber = '703512563'
    // console.log(p1.telephoneNumber)
    test.testEqual(p1.name, 'John')
    test.testEqual(p1.telephoneNumber, '256 703512563')
});
