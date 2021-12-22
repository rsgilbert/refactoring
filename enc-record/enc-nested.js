// encapsulate nested record
const test = require('../test-utils')
const _ = require('lodash')

const customerData = {
    '1920': {
        name: 'martin',
        id: '1920',
        usages: {
            '2016': {
                '1': 50,
                '2': 55
            },
            '2015': {
                '1': 70,
                '2': 63
            }
        }
    },
    '38673': {
        name: 'neal',
        id: '38673',
        usages: {
            '2016': {
                '1': 20,
                '2': 5
            },
            '2015': {
                '1': 50,
                '2': 31
            }
        }
    }
}

// sample update
let customerID = '38673'
// customerData[customerID].usages[2016][2] = 100;
// console.log(JSON.stringify(customerData))

function compareUsage(customerID, laterYear, month) {
    const later =  customerData[customerID].usages[laterYear][month] 
    const earlier =  customerData[customerID].usages[Number(laterYear) - 1][month] 
    return {
        laterAmount: later,
        earlierAmount: earlier,
        change: later - earlier
    }
}

test.skip(function updateUsageTest() {
    customerData[customerID].usages[2016][2] = 100;
    test.testEqual(customerData[customerID].usages[2016][2], 100);
})

test.skip(function compareUsageTest() {
    const comparison = compareUsage(customerID, '2016', '1');
    test.testEqual(comparison.change, -30)
})

// refactor 
// Step 2: create class for overall structure
class CustomerData {
    #data;
    constructor(data) {
        this.#data = data;
    }
    get rawData() {
        // return deep copy of data
        // Any update being done on the rawData will fail thus
        // giving away areas where there is poor encapsulationo.
        return _.cloneDeep(this.#data);
    }
    // extract fn
    // move fn
    setUsage(customerID, year, month, usage) {
        this.#data[customerID].usages[year][month] = usage;
    }

    usage(customerID, year, month) {
        return getRawCustomerData()[customerID].usages[year][month];
    }
}

const custData = new CustomerData(customerData);

// Step 1: encapsulate variable
function getRawCustomerData() {
    return custData.rawData;
}

function getCustomerData() {
    return custData;
}


// refactored compare usage. Uses encapsulated variables and records
function ref_compareUsage(customerID, laterYear, month) {
    const later =  getCustomerData().usage(customerID, laterYear, month);
    const earlier =  getCustomerData().usage(customerID, Number(laterYear) - 1, month); 
    return {
        laterAmount: later,
        earlierAmount: earlier,
        change: later - earlier
    }
}



test.test(function refactor_updateUsageTest() {
    getCustomerData().setUsage(customerID, 2016, 2, 100);
    test.testEqual(customerData[customerID].usages[2016][2], 100);
})


test.test(function refactor_compareUsageTest() {
    const comparison = ref_compareUsage(customerID, '2016', '1');
    test.testEqual(comparison.change, -30)
})
