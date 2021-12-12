const test = require('../test-utils')

const order1 = { quantity: 2, itemPrice: 3000 }
const order2 = { quantity: 5, itemPrice: 40 }

function basePrice(order) {
    return order.quantity * order.itemPrice - 
        Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
        Math.min(order.quantity * order.itemPrice * 0.1, 100)
}

// console.log(basePrice(order1))
// console.log(basePrice(order2))

// Extract variable
function refactor_basePrice(order) {
    const basePrice = order.quantity * order.itemPrice;
    const quantityDiscount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
    const shipping = Math.min(basePrice * 0.1, 100);
    return basePrice - quantityDiscount + shipping;
}

// console.log("**** Refactor - Extract Variable ****")
// console.log(refactor_basePrice(order1))
// console.log(refactor_basePrice(order2))

// test(basePrice(order1), refactor_basePrice(order1))
// test(basePrice(order2), refactor_basePrice(order2))


function ref_basePrice(order) {
    // put basePrice understanding in the code
    const basePrice = order.quantity * order.itemPrice
    const quantityDiscount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05
    const shipping = Math.min(basePrice * 0.1, 100)
    return basePrice - quantityDiscount + shipping
}
// test(basePrice(order1), ref_basePrice(order1))
// test(basePrice(order2), ref_basePrice(order2))


// Example with class
class Order {
    #data = {}
    constructor(aRecord) {
        this.#data = aRecord;
    }

    get quantity() { return this.#data.quantity; }
    get itemPrice() { return this.#data.itemPrice; }

    // get price() {
    //     return this.quantity * this.itemPrice - 
    //         Math.max(0, this.quantity - 500) * this.itemPrice * 0.05 +
    //         Math.min(this.quantity * this.itemPrice * 0.1, 100)
    // }

    // Refactor 1
    // get price() {
    //     const basePrice = this.quantity * this.itemPrice;
    //     const quantityDiscount = Math.max(0, this.quantity - 500) * this.itemPrice * 0.05;
    //     const shipping =  Math.min(basePrice * 0.1, 100)
    //     return basePrice - quantityDiscount + shipping;
    // }

    // Refactor 2 - extract as method rather than variables since they apply to entire order
    get basePrice() {
        return this.quantity * this.itemPrice;
    }
    get quantityDiscount() {
        return Math.max(0, this.quantity - 500) * this.itemPrice * 0.05
    }
    get shipping() {
        return Math.min(this.basePrice * 0.1, 100)
    }
    get price() {
        return this.basePrice - this.quantityDiscount + this.shipping;
    }

}

const o1 = new Order(order1)
const o2 = new Order(order2)

test(basePrice(order1), o1.price)
test(basePrice(order2), o2.price)
