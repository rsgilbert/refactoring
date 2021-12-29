// move functions betweens classes
const test = require('../test-utils')


class Account {
    get type() { return this._type; }
    set type(arg) { this._type = arg; }

    get daysOverdrawn() { return this._daysOverdrawn; }
    set daysOverdrawn(arg) { this._daysOverdrawn = arg; }

    get bankCharge() {
        let result = 4.5;
        if(this._daysOverdrawn > 0) {
            result += this.overdaftCharge;
        }
        return result;
    }

    get overdaftCharge() {
        if(this.type.isPermium) {
            const baseCharge = 10;
            if(this._daysOverdrawn <= 7) {
                return baseCharge;
            }
            else {
                return baseCharge + (this._daysOverdrawn - 7) * 0.85;
            } 
        }
        else {
            return this._daysOverdrawn * 1.75;
        }
    }
}

class AccountType {
    get isPremium() { return this._isPremium; }
    set isPremium(arg) { this._isPremium = arg; }

}


test.skip(function overdaftChargeTest() {
    const account = new Account();
    account.type = new AccountType();
    account.type.isPermium = true;
    account.daysOverdrawn = 8;
    // console.log(account)
    // console.log(account.overdaftCharge)
    test.testEqual(account.overdaftCharge, 10.85)
});

// refactor 
// move function overdraftCharge from Account class to AccountType class


class Account2 {
    get type() { return this._type; }
    set type(arg) { this._type = arg; }

    get daysOverdrawn() { return this._daysOverdrawn; }
    set daysOverdrawn(arg) { this._daysOverdrawn = arg; }

    get bankCharge() {
        let result = 4.5;
        if(this._daysOverdrawn > 0) {
            result += this.type.sec_overdaftCharge(this);
        }
        return result;
    }

    // supposed to read overdraftCharge
    get overdaftCharge() {
        return this.type.sec_overdaftCharge(this)
    }
}

class AccountType2 {
    get isPremium() { return this._isPremium; }
    set isPremium(arg) { this._isPremium = arg; }


    overdaftCharge(daysOverdrawn) {
        if(this.isPermium) {
            const baseCharge = 10;
            if(daysOverdrawn <= 7) 
                return baseCharge;
            else 
                return baseCharge + (daysOverdrawn - 7) * 0.85;
        }
        else return daysOverdrawn * 1.75;
    }

    sec_overdaftCharge(account) {
        if(this.isPermium) {
            const baseCharge = 10;
            if(account.daysOverdrawn <= 7) 
                return baseCharge;
            else 
                return baseCharge + (account.daysOverdrawn - 7) * 0.85;
        }
        else return account.daysOverdrawn * 1.75;
    }
}


test.test(function ref_overdaftChargeTest() {
    const account = new Account2();
    account.type = new AccountType2();
    account.type.isPermium = true;
    account.daysOverdrawn = 8;
    // console.log(account)
    // console.log(account.overdaftCharge)
    test.testEqual(account.overdaftCharge, 10.85)
});

test.test(function ref_bankChargeTest() {
    const account = new Account2();
    account.type = new AccountType2();
    account.type.isPermium = true;
    account.daysOverdrawn = 8;
    // console.log(account)
    // console.log(account.bankCharge)
    test.testEqual(account.bankCharge, 15.35)
});
