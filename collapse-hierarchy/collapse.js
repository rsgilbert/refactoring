

class Emp {
    _name;
    get name() { return this._name; }
    set name(arg) { this._name = arg; }
}

class Salesman {
    _salesCode;
    get salesCode() { return this._salesCode; }
    set salesCode(arg) { this._salesCode = arg; }
}

// collapse hierarcy
class Ref_Employee {
    _name;
    get name() { return this._name; }
    set name(arg) { this._name = arg; }
    _salesCode;
    get salesCode() { return this._salesCode; }
    set salesCode(arg) { this._salesCode = arg; }
}

module.exports = {
    Emp, Salesman, Ref_Employee
}