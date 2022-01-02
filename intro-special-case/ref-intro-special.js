// introduce special case 

class Site {
    constructor() { this._customer = new Customer(); }
    get customer() { 
        return this._customer.toString() === 'unknown'
            ? new UnknownCustomer()
            : this._customer;
    }
    set customer(arg) { this._customer.name = arg; }
    get name(){ return this._name; }
    get amount() { return this.customer.billingPlan; }
    set amount(arg){ this.customer.billingPlan = arg; }
}

class Customer {
    constructor(name) {
        name ? this.name = name : this.name = 'unknown';
    }
    get name() { return this._name; }
    set name(arg) { this._name = arg; }

    get billingPlan() { return this._billingPlan; }
    set billingPlan(arg) { this._billingPlan = arg; }

    toString() { return this.name; }
    isUnknown() { return false; }

    paymentHistory() { return { size: 'Huge' }}
}

class UnknownCustomer {
    isUnknown() { return true; }
    get billingPlan() { return -1; }
    set billingPlan(arg) { /* ignore */ }
    get name() { return 'occupant'; }
    paymentHistory() { return { size: 'None'} }
}
function isUnknown(arg) {
    return arg.isUnknown();
}



function customerName(site) {
    return site.customer.name;
}

function plan(site) {
    return site.amount;
}

function weeksDeliquent(site) {
    return site.customer.isUnknown()
        ? -1
        : site.amount / 7;
}

function doublePlan(site) {
    site.customer.billingPlan *= 2;
}

function paymentHistorySize(site) {
    return site.customer.paymentHistory().size;
}



module.exports = { 
    Site, plan, weeksDeliquent, customerName, doublePlan,
    paymentHistorySize
} ;