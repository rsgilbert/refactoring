// const Customer = require('./chg-val-to-ref.js')

class Customer {
    constructor(id) {
        this._id = id;
    }
    get id() { return this._id; }
    get fname() { return this._fname; }
    set fname(arg) { this._fname = arg; }
}


/** @type {{ customers: Map }} */
let _repositoryData;


function initialize() {
    _repositoryData = {}
    _repositoryData.customers = new Map();
}


function registerCustomer(id) {
    if(!_repositoryData.customers.has(id)) {
        _repositoryData.customers.set(id, new Customer(id));
    }
    return findCustomer(id);
}

function findCustomer(id) {
    return _repositoryData.customers.get(id);
}


module.exports = {
    registerCustomer, 
    findCustomer,
    initialize
}