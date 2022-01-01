// change reference to value
"use strict"
const test = require('../test-utils')

class Person {
    constructor() {
        this._telephoneNumber = new TelephoneNumber();
    }

    get officeAreaCode() { return this._telephoneNumber.areaCode; }
    set officeAreaCode(arg) { this._telephoneNumber.areaCode = arg; }

    get officeNumber() { return this._telephoneNumber.number; }
    set officeNumber(arg) { this._telephoneNumber.number = arg; }
}


class TelephoneNumber {
    get areaCode() { return this._areaCode; }
    set areaCode(arg) { this._areaCode = arg; }

    get number() { return this._number; }
    set number(arg) { this._number = arg; }
}

test.skip(function personTest() {
    const person = new Person();
    person.officeAreaCode = 4;
    console.log(person.officeAreaCode)
});

// refactor
// Change reference to value
class Person2 {
    constructor() {
        this._telephoneNumber = new TelephoneNumber2();
    }

    get officeAreaCode() { 
        return this._telephoneNumber.areaCode; }
    set officeAreaCode(arg) {
        //  this._telephoneNumber.areaCode = arg
        this._telephoneNumber = new TelephoneNumber2(arg, this.officeNumber);
    }

    get officeNumber() { return this._telephoneNumber.number; }
    set officeNumber(arg) {
        this._telephoneNumber = new TelephoneNumber2(this.officeAreaCode, arg);
    }
}


class TelephoneNumber2 {
    constructor(areaCode, number){ 
        this._areaCode = areaCode;
        this._number = number;
    }
    get areaCode() { return this._areaCode; }
    set areaCode(arg) { this._areaCode = arg; }

    get number() { return this._number; }
    set number(arg) { this._number = arg; }

    // value based equality method
    equals(other) {
        if(! (other instanceof TelephoneNumber2)) return false;
        return this.areaCode === other.areaCode &&
            this.number === other.number;
    }
}

test.test(function personTest() {
    const person = new Person2();
    person.officeAreaCode = 4;
    test.testEqual(person.officeAreaCode, 4);
});


test.test(function telephoneReferenceChangeTest() {
    const person = new Person2();
    const tele = person._telephoneNumber;
    person.officeAreaCode = 4;
    test.testNotEqual(person._telephoneNumber, tele);
    test.testEqual(person.officeAreaCode, 4);
    const tele2 = person._telephoneNumber;
    person.officeNumber = 55;
    test.testNotEqual(person._telephoneNumber, tele2);
    test.testEqual(person.officeNumber, 55);
});



test.test(function telephoneEquality() {
    const t1 = new TelephoneNumber2(44, 102100);
    const t2 = new TelephoneNumber2(44, 102100);
    test.testTrue(t1.equals(t2));
    test.testFalse(      new TelephoneNumber2(15, 111180)
                .equals(new TelephoneNumber2(55, 111180)));
})