const test = require('../test-utils')

function discount(inputValue, quantity) {
    if(inputValue > 50) inputValue = inputValue - 2;
    if(quantity > 100) inputValue = inputValue - 1;
    return inputValue;
}

test.skip(function discountTest() {
    const d1 = discount(50, 40);
    test.testEqual(d1, 50);

    const d2 = discount(500, 40);
    test.testEqual(d2, 498);

    const d3 = discount(500, 400);
    test.testEqual(d3, 497);
});

// split variable used as input parameter
function ref_discount(inputValue, quantity) {
    let result = inputValue;
    if(inputValue > 50) result = result - 2;
    if(quantity > 100) result = result - 1;
    return result;
}

test.test(function ref_discountTest() {
    let inv = 50;
    const d1 = ref_discount(inv, 40);
    test.testEqual(d1, 50);

    const d2 = ref_discount(500, 40);
    test.testEqual(d2, 498);

    const d3 = ref_discount(500, 400);
    test.testEqual(d3, 497);
})