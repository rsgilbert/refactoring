// replace nested (I think unusual) conditional with guard clause
const test = require('../test-utils')


function payAmount(employee) {
    if(employee.isSeparated) {
        return { amount: 0, reasonCode: 'SEP' }
    }
    if(employee.isRetired) {
        return { amount: 0, reasonCode: 'RET' }
    }
    // main part
    // do logic to compute amount
    let result;
    result = { amount: 2000, reasonCode: '' }
    return result;
}

test.skip(function payAmountTest() {
    test.testEqual(payAmount({ isSeparated: true }).reasonCode, 'SEP')
    test.testEqual(payAmount({ isRetired: true }).reasonCode, 'RET')
    test.testEqual(payAmount({ name: "Tiffany" }).amount, 2000)
});

// refactor
// use guard clause

function ref_payAmount(employee) {
    let result;
    if(employee.isSeparated) {
        return { amount: 0, reasonCode: 'SEP' }
    }
    else {
        if(employee.isRetired) {
            result = { amount: 0, reasonCode: 'RET' }
        }
        else {
            // main part
            // do logic to compute amount
            result = { amount: 2000, reasonCode: '' }
        }
    }
    return result;
}

test.test(function ref_payAmountTest() {
    test.testEqual(ref_payAmount({ isSeparated: true }).reasonCode, 'SEP')
    test.testEqual(ref_payAmount({ isRetired: true }).reasonCode, 'RET')
    test.testEqual(ref_payAmount({ name: "Tiffany" }).amount, 2000)
});
