const _ = require('lodash')

const site = {
    customer: {
        name: ''
    },
    width: 30,
    paymentHistory: {
        size: 'Long'
    }
}

const site2 = {
    customer: {
        name: 'Jenifer'
    },
    width: 30,
    paymentHistory: {
        size: 'Long'
    }
}

// transform/enrich site
function enrichSite(site) {
    const result = _.cloneDeep(site);
    // special case customer
    const unknownCustomer = {
        isUnknown: true,
        name: 'occupant'
    }
    if(isUnknownCustomer(result)) 
        result.customer = unknownCustomer;
    else result.customer.isUnknown = false;
    return result;
}

function isUnknownCustomer(site) {
    return site.customer.name === '';
}

function customerName(site) {
    return isUnknownCustomer(site) 
    ? 'occupant'
    : site.customer.name;
}

function ref_customerName(site) {
    return enrichSite(site).customer.name;
}

console.log(customerName(site));
console.log(customerName(site2));
// refactored
console.log(ref_customerName(site));
console.log(ref_customerName(site2));


