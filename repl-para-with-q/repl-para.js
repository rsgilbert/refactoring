// replace parameter with query

class Order {
    constructor(quantity, itemPrice) {
        this.quantity = quantity;
        this.itemPrice = itemPrice;
    }

    get finalPrice() {
        const basePrice = this.quantity * this.itemPrice;
        let discountLevel; 
        if(this.quantity > 100) discountLevel = 2;
        else discountLevel = 1;
        return this.discountedPrice(basePrice, discountLevel);
    }

    discountedPrice(basePrice, discountLevel) {
        switch(discountLevel) {
            case 1: return basePrice * 0.95;
            case 2: return basePrice * 0.9;
        }
    }
}


class Ref_Order {
    constructor(quantity, itemPrice) {
        this.quantity = quantity;
        this.itemPrice = itemPrice;
    }

    get discountLevel() {
        return (this.quantity > 100) ? 2 : 1;
    }

    get finalPrice() {
        const basePrice = this.quantity * this.itemPrice;
        return this.discountedPrice(basePrice);
    }

    discountedPrice(basePrice) {
        switch(this.discountLevel) {
            case 1: return basePrice * 0.95;
            case 2: return basePrice * 0.9;
        }
    }
}


module.exports = {
    Order,
    Ref_Order
}