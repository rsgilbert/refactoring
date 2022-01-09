'use strict'
//pull up constructor

class Party {
    _name;
    constructor(name) {
        this._name = name;
    }
    finalConstruction() {
        console.log(this)
    }
}

class Employee extends Party {
    _id;
    _monthlyCost;
    constructor(name, id, monthlyCost) {
        super(name);
        this._id = id;
        this._monthlyCost = monthlyCost;
        this.finalConstruction();
    }
}

class Department extends Party {
    _staff;
    constructor(name, staff) {
        super(name);
        this._staff = staff;
        this.finalConstruction();
    }


}

module.exports = { 
    Department, Employee
}