// consolidate conditional expression
const test = require('../test-utils')


function disabilityAmount(employee) {
    if(employee.seniority < 2) return 0;
    if(employee.monthsDisabled > 12) return 0;
    if(employee.isPartTime) return 0;
    if(employee.onVacation) {
        if(employee.seniority > 10) {
            if(employee.sick) {
                return 100;
            }
        }
    }
    return 250;
}


test.skip(function disabilityAmountTest(){
    let emp = { seniority: 5, monthsDisabled: 15 };
    test.testEqual(disabilityAmount(emp), 0);
    emp = { seniority: 1 };
    test.testEqual(disabilityAmount(emp), 0);
    emp = { isPartTime: true };
    test.testEqual(disabilityAmount(emp), 0);
    emp = { isPartTime: true, monthsDisabled: 51, seniority: 1 };
    test.testEqual(disabilityAmount(emp), 0);
    emp = { size: 1 };
    test.testEqual(disabilityAmount(emp), 250);
});

// refactor
// consolidate conditional

function ref_disabilityAmount(employee) {
    if(isNotEligibleForDisability(employee)) return 0;
    if(isASickSeniorOnVacation(employee)) {
        return 100;
    }
    return 250;

    function isASickSeniorOnVacation(employee) {
        return employee.onVacation && employee.seniority > 10 && employee.sick;
    }

    function isNotEligibleForDisability(employee) {
        return (employee.seniority < 2) ||
            (employee.monthsDisabled > 12) ||
            (employee.isPartTime);
    }    
}

test.test(function ref_disabilityAmountTest(){
    let emp = { seniority: 5, monthsDisabled: 15 };
    test.testEqual(ref_disabilityAmount(emp), 0);
    emp = { seniority: 1 };
    test.testEqual(ref_disabilityAmount(emp), 0);
    emp = { isPartTime: true };
    test.testEqual(ref_disabilityAmount(emp), 0);
    emp = { isPartTime: true, monthsDisabled: 51, seniority: 1 };
    test.testEqual(ref_disabilityAmount(emp), 0);
    emp = { size: 1 };
    test.testEqual(ref_disabilityAmount(emp), 250);
    emp = { onVacation: true };
    test.testEqual(ref_disabilityAmount(emp), 250);
    emp = { onVacation: true, seniority: 4 };
    test.testEqual(ref_disabilityAmount(emp), 250);
    emp = { onVacation: true, seniority: 11 };
    test.testEqual(ref_disabilityAmount(emp), 250);
    emp = { onVacation: true, seniority: 11, sick: true };
    test.testEqual(ref_disabilityAmount(emp), 100);
});
