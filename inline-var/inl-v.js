const { testEqual, testTrue, testFalse } = require('../test-utils')

function isBig(anOrder){
    let basePrice = anOrder.basePrice;
    return (basePrice > 1000);
}

const order1 = { basePrice: 400 }
const order2 = { basePrice: 80000 }


// testFalse(isBig(order1))
// testTrue(isBig(order2))

// refactor
function ref_isBig(anOrder) {
    return (anOrder.basePrice > 1000);
}

testFalse(ref_isBig(order1))
testTrue(ref_isBig(order2))