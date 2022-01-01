const test = require("../test-utils");

function chargeFor(plan) {
    let result;
    if(plan.isSummerPlan && plan.chargeable) {
        result = plan.quantity * plan.summerRate;
    }
    else {
        result = plan.quantity * plan.regularRate + plan.regularServiceCharge;
    }
    return result;
}

const summerPlan = () => ({
    quantity: 3,
    summerRate: 0.5,
    isSummerPlan: true,
    chargeable: true
});

const regularPlan = () => ({
    quantity: 2,
    regularRate: 50,
    regularServiceCharge: 0.2
});

test.skip(function summerPlanTest() {
    const charge = chargeFor(summerPlan());
    test.testEqual(charge, 1.5);
})

test.skip(function regularPlanTest() {
    const charge = chargeFor(regularPlan());
    test.testEqual(charge, 100.2);
})

// refactor
// extract conditional and each leg of conditional.
function ref_chargeFor(plan) {
    const result = isSummer(plan) ? summerCharge(plan) : regularCharge(plan);
    return result;
}

// conditional
function isSummer(plan) { 
    return plan.isSummerPlan && plan.chargeable;
}

// then leg
function summerCharge(plan) {
    return plan.quantity * plan.summerRate;
}

// else leg 
function regularCharge(plan) {
    return plan.quantity * plan.regularRate + plan.regularServiceCharge;
}




test.test(function ref_summerPlanTest() {
    const charge = ref_chargeFor(summerPlan());
    test.testEqual(charge, 1.5);
})

test.test(function ref_regularPlanTest() {
    const charge = ref_chargeFor(regularPlan());
    test.testEqual(charge, 100.2);
})
