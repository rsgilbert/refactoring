// replace type code with subclasses
// Using indirect inheritance
// May also be called Replace Type Code with State/Strategy
// We apply the subclassing on the type parameter

class Employee {
    /** @type string */
    _name;
    /** @type EmployeeType */
    _type;

    /**
     * 
     * @param {string} name 
     * @param {'salesman'|'engineer'|'manager'} type 
     */
    constructor(name, type) {
        this.validateType(type)
        this._name = name;
        this.type = type;
    }

    static createEmployeeType(st) {
        switch(st) {
            case 'salesman': return new SalesmanType();
            case 'engineer': return new EngineerType();
        }
        throw Error(`Unexpected employee type ${st}`)
    }

    validateType(arg) {
        if(!['engineer', 'manager', 'salesman'].includes(arg))
            throw new Error(`Employee cannot be of type ${arg}`)
    }

    get typeString() { return this.type.toString(); }

    get type() { return this._type; }
    set type(arg) { 
        // replace primitive with object
        this._type = Employee.createEmployeeType(arg); 
    }

    toString() { 
        return `${this._name} (${this.type.capitalizedString()})`
    }
}


class EmployeeType {
    /** @abstract */
    toString() { throw Error('Not implemented') }

    capitalizedString() {
        return `${this.toString().charAt(0).toUpperCase()}${this.toString().substring(1)}`
    }
}

class EngineerType extends EmployeeType {
    toString(){ return 'engineer' }
}

class SalesmanType extends EmployeeType {
    toString() { return 'salesman' }
}

module.exports = {
    Employee
}
