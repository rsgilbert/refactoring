//pull up constructor

class Party {}

class Employee extends Party {
    _id;
    _name;
    _monthlyCost;
    constructor(name, id, monthlyCost) {
        super();
        this._id = id;
        this._name = name;
        this._monthlyCost = monthlyCost;
    }
}

class Department extends Party {
    _name;
    _staff;
    constructor(name, staff) {
        super();
        this._name = name;
        this._staff = staff;
    }
}

module.exports = { 
    Department, Employee
}