// replace type code with subclasses

class Employee {
    /** @type string */
    _name;
    /** @type string */
    _type;

    constructor(name, type) {
        this.validateType(type)
        this._name = name;
        this._type = type;
    }

    validateType(arg) {
        if(!['engineer', 'manager', 'salesman'].includes(arg))
            throw new Error(`Employee cannot be of type ${arg}`)
    }

    toString() { 
        return `${this._name} (${this._type})`
    }
}


module.exports = {
    Employee
}
