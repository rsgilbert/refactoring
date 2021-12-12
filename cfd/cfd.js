// Rename Function
const assert = require('assert');
let { test, testEqual, testFalse, testTrue, skip, summarize } =  require("../test-utils");


// Simple mechanics
function circumference(radius) {
    return 2 * Math.PI * radius;
}

// Migration mechancics
function circum2(radius) {
    return circumference2(radius)
}

// console.log(circumference2(4))
// console.log(circum2(5))
function circumference2(radius) {
    return 2 * Math.PI * radius;
}

// Example : Adding a parameter
class Book {
    #reservations = []
    get reservations() { return this.#reservations;}
    addReservation(customer) {
        this.#reservations.push(customer)
    }
}

// Refactor 
class Ref_Book {
    #reservations = []

    get reservations() { return this.#reservations;}

    addReservation(customer) {
        this.zz_addReservation(customer, false)
    }

    zz_addReservation(customer, isPriority) {
        assert(isPriority === true || isPriority == false)
        if(isPriority) { 
            this.#reservations.push(customer)
        } 
        else {
            this.#reservations.push(customer)
        }
    }
}

const book = new Book();
const refBook = new Ref_Book();

skip(function book() {
    book.addReservation('Jane')
    book.addReservation('Peter')
    testEqual(2, book.reservations.length)
})


test(function refBookTest() {
    refBook.addReservation('Mark')
    refBook.addReservation('Mary')
    refBook.zz_addReservation('Simon', true)
    testEqual(3, refBook.reservations.length)
});

// function inNewEngland(aCustomer) {
//     zz_inNewEngland(aCustomer.address)
// }

function inNewEngland(address) {
    return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(address)
}

const customers = [{ address: 'MA' }, { address: 'GA' }, { address: 'RI' }]
const newEnglanders = customers.filter(c => inNewEngland(c.address))

test(function inNewEnglandTest() {
    testEqual(2, newEnglanders.length)
})





summarize()
