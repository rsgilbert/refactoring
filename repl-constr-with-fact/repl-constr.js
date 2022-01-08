// replace constructor with factory function


class Employee {
    constructor(name, typeCode) {
        this._name = name;
        this._typeCode = typeCode;
    }

    get name() { return this._name; }
    set name(arg) { this._name = arg; }

    get type() { return Employee.legalTypeCodes[this._typeCode] }

    static get legalTypeCodes() {
        return { 'E': 'Employee', 'M': 'Manager', S: 'Salesman' }
    }
}

function createEmployee(name, typeCode) {
    return new Employee(name, typeCode)
}

function createEngineer(name) {
    return new Employee(name, 'E')
}

module.exports = {
    Employee,
    createEmployee,
    createEngineer
}