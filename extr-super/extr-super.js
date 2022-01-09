// Extract superclass


class Employee {
    _id;
    _name;
    _monthlyCost;
    constructor(name, id, monthlyCost) {
        this._id = id;
        this._name = name;
        this._monthlyCost = monthlyCost;
    }

    get monthlyCost() { return this._monthlyCost; }
    get name() { return this._name; }
    get id() { return this._id; }

    get annualCost() {
        return this._monthlyCost * 12;
    }
}


class Department {
    _name;
    _staff;
    constructor(name, staff) {
        this._name = name;
        this._staff = staff;
    }

    get staff() { return this._staff.slice(); }
    get name() { return this._name; }

    get totalMonthlyCost() {
        return this.staff
            .map(e => e.monthlyCost)
            .reduce((sum, cost) => sum + cost);
    }

    get headCount() {
        return this._staff.length;
    }

    get totalAnnualCost() {
        return this.totalMonthlyCost * 12;
    }
}

module.exports = {
    Employee,
    Department
}