// rename field
'use strict'
const test = require('../test-utils')
const _ = require('lodash')

const organization = {
    name: 'Acme Gooseberries',
    country: 'GB'
}


test.test(function organizationTest() {
    const organization = {
        name: 'Acme Gooseberries',
        country: 'GB'
    }
    test.testEqual(organization.name, 'Acme Gooseberries')
    organization.name = 'Jack Wash'
    test.testEqual(organization.name, 'Jack Wash')
    test.testEqual(organization.country, 'GB')
});

// refactor
// rename field 'name' to 'title'
// first step is to apply EncapsulateRecord

// encapsulate organization record
class Organization {
    #title;
    #country;
    constructor(data) {
        this.#title = data.title;
        this.#country = data.country;
    }
    rawData() {
        return { title: this.#title, country: this.#country }
    }

    get title() { return this.#title; }
    set title(arg) { this.#title = arg; }
    get country() { return this.#country; }
}

const ref_organization = {
    title: 'Acme Gooseberries',
    country: 'GB'
}

const org = new Organization(ref_organization);

function getOrganization() {
    return org;
}

test.test(function ref_organizationTest() {
    test.testEqual(getOrganization().title, 'Acme Gooseberries')
    getOrganization().title = 'Jack Wash'
    test.testEqual(getOrganization().title, 'Jack Wash')
    test.testEqual(getOrganization().country, 'GB')
});