// replace temp with query
const test = require('../test-utils')
class Order {
    
    constructor(quantity, item) {
        this.quantity = quantity;
        this.item = item;
    }

    get price() {
        const basePrice = this.quantity * this.item.price;
        let discountFactor = 0.98;
        if(basePrice > 1000) discountFactor -= 0.03;
        return basePrice * discountFactor;
    }
}

test.skip(function priceTest() {
    const item1 = { price: 500 }
    const order = new Order(10, item1);
    test.testEqual(order.price, 4750);
})

class Order2 { 
    constructor(quantity, item) {
        this.quantity = quantity;
        this.item = item;
    }

    get basePrice() {
        return this.quantity * this.item.price;
    }

    get discountFactor(){
        let result = 0.98;
        if(this.basePrice > 1000) result -= 0.03;
        return result;
    }

    get price() {
        return this.basePrice * this.discountFactor;
    }
}

test.test(function ref_priceTest() {
    const item1 = { price: 500 }
    const order = new Order2(10, item1);
    test.testEqual(order.price, 4750);
})