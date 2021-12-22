const { get } = require('lodash')
const test = require('../test-utils')
let organization = { name: 'Tiktok', country: 'UG' }




test.skip(function resultTest() {
    const result = `<h1>${organization.name}</h1>`
    organization.name = 'YouTube'
    test.testEqual(result, '<h1>Tiktok</h1>')
    test.testEqual(organization.name, 'YouTube')
})

// refactor 
// step 2: Replace record with class
class Organization {
    #name;
    #country;
    constructor(data){
        // Fold data field directly into the object.
        this.#name = data.name;
        this.#country = data.country;
    }
    // get rawData() { return this.#data; }

    get name() { return this.#name; }
    set name(n) {
        this.#name = n;
    }
    get country() { return this.#country; }
}

const org = new Organization({ name: 'Tiktok', country: 'UG' })


// step 1: encapsulate variable
// Make all accesses go through a function
// Commented out (or deleted) at the end. (short life)
// function getRawDataOfOrg() {
//     return org.rawData;
// }


function getOrganization() {
    return org;
}


test.test(function refactor_Test() {
    const result = `<h1>${getOrganization().name}</h1>`
    getOrganization().name = 'YouTube'
    test.testEqual(result, '<h1>Tiktok</h1>')
    test.testEqual(getOrganization().name, 'YouTube')
})