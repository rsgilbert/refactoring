// replace type code with subclasses

class Employee {
    /** @type string */
    _name;

    constructor(name) {
        this._name = name;
    }

    toString() { 
        return `${this._name} (${this.type})`
    }
}

class Salesman extends Employee {
    get type() { return 'salesman' }
}

class Engineer extends Employee {
    get type() { return 'engineer' }
}

class Manager extends Employee {
    get type() { return 'manager' }
}

function createEmployee(name, type) {
    switch(type) {
        case 'salesman': return new Salesman(name);
        case 'engineer': return new Engineer(name);
        case 'manager': return new Manager(name);
    }
    throw new Error('Unexpected type ' + type);
}

module.exports = {
    Employee,
    createEmployee,
    Salesman
}
