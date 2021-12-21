const { testEqual } = require('../test-utils');
const test = require('../test-utils')
function priceOrder(product, quantity, shippingMethod) {
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0) 
        * product.basePrice 
        * product.discountRate;
    const shippingPerCase = (basePrice > shippingMethod.discountThreshold)
        ? shippingMethod.discountFee 
        : shippingMethod.feePerCase;
    const shippingCost = quantity * shippingPerCase;
    const price = basePrice - discount + shippingCost;
    return price;
}

test.skip(function priceOrderTest() {
    const product = { basePrice: 2000, discountRate: 0.1, discountThreshold: 3 }
    const quantity = 4;
    const shippingMethod = { discountThreshold: 2, discountFee: 3000, feePerCase: 460 }
    const price = priceOrder(product, quantity, shippingMethod)
    // console.log(price)
    testEqual(price, 19800)
})

// refactor
function ref_priceOrder(product, quantity, shippingMethod) {
    const priceData = calculatePricingData(product, quantity)
    return applyShipping(priceData, shippingMethod);
}

/**
 * 
 * @param {number} product 
 * @param {number} quantity 
 * @returns { {basePrice: number, quantity: number, discount: number} }
 */
function calculatePricingData(product, quantity) {
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0) 
        * product.basePrice 
        * product.discountRate;
    return { basePrice, quantity, discount }
}

/** 
 * @param { { basePrice: number, quantity: number, discount: number } } priceData 
 * @param { { discountFee: number, feePerCase: number, discountThreshold: number } } shippingMethod 
 */
function applyShipping(priceData, shippingMethod) {
    const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold)
        ? shippingMethod.discountFee 
        : shippingMethod.feePerCase;
    const shippingCost = priceData.quantity * shippingPerCase;
    return priceData.basePrice - priceData.discount + shippingCost;
}


test.test(function ref_priceOrderTest() {
    const product = { basePrice: 2000, discountRate: 0.1, discountThreshold: 3 }
    const quantity = 4;
    const shippingMethod = { discountThreshold: 2, discountFee: 3000, feePerCase: 460 }
    const price = ref_priceOrder(product, quantity, shippingMethod)
    test.testEqual(price, 19800)
})