// inline class 
const test = require('../test-utils')


// Used as part of shipment class
class TrackingInformation {
    get shippingCompany() { return this._shippingCompany; }
    set shippingCompany(arg) { this._shippingCompany = arg; }

    get trackingNumber() { return this._trackingNumber; }
    set trackingNumber(arg) { this._trackingNumber = arg; }

    get display() {
        return `${this.shippingCompany}: ${this.trackingNumber}`;
    }
}

class Shipment {
    get trackingInfo() { return this._trackinginformation.display; }

    get trackingInformation() { return this._trackinginformation; }
    set trackingInformation(arg) { this._trackinginformation = arg;  }
}


test.skip(function shipmentTest() {
    const shipment = new Shipment();
    const trackingInformation = new TrackingInformation();
    shipment.trackingInformation = trackingInformation;
    shipment.trackingInformation.shippingCompany = 'TELETO';
    shipment.trackingInformation.trackingNumber = 500;
    // console.log(shipment);
    test.testEqual(shipment.trackingInfo, 'TELETO: 500')

})

// *******************
// refactor


// Used as part of shipment class
// class TrackingInformation2 {
//     get shippingCompany() { return this._shippingCompany; }
//     set shippingCompany(arg) { this._shippingCompany = arg; }

//     get trackingNumber() { return this._trackingNumber; }
//     set trackingNumber(arg) { this._trackingNumber = arg; }

//     get display() {
//         return `${this.shippingCompany}: ${this.trackingNumber}`;
//     }
// }

class Shipment2 {
    get trackingInfo() {  return `${this.shippingCompany}: ${this.trackingNumber}`; }

    get shippingCompany() { return this._shippingCompany; }
    set shippingCompany(arg) { this._shippingCompany = arg; }

    get trackingNumber() { return this._trackingNumber; }
    set trackingNumber(arg) { this._trackingNumber = arg; }
}


test.test(function ref_shipmentTest() {
    const shipment = new Shipment2();
    shipment.shippingCompany = 'TELETO';
    shipment.trackingNumber = 500;
    console.log(shipment);
    test.testEqual(shipment.trackingInfo, 'TELETO: 500')

})