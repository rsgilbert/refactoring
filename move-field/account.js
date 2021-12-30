const test = require('../test-utils')
const assert = require('assert')

class Account {
    constructor(number, type, interestRate) {
        this._number = number;
        this._type = type;
        this._interestRate = interestRate;
    }

    get interestRate() { return this._interestRate; }
}

class AccountType {
    constructor(nameString) {
        this._name = nameString;
    }
}

// Refactor
// Move interestRate field from Account to AccountType class
class Account2 {
    constructor(number, type, interestRate) {
        this._number = number;
        this._type = type;
        assert.strictEqual(interestRate, this._type.interestRate)
        this._interestRate = interestRate;
    }

    get interestRate() { return this._type.interestRate; }
}

class AccountType2 {
    constructor(nameString, interestRate) {
        this._name = nameString;
        this._interestRate = interestRate;
    }
    get interestRate() { return this._interestRate; }
}

test.test(function interestRateTest() {
    const accountType = new AccountType2('Premium', 0.2);
    const account = new Account2(500, accountType, 0.2);
    test.testEqual(account.interestRate, 0.2);
});