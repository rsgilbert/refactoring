// remove setting method


class Person {

    get name() { return this._name; }
    set name(arg) { this._name = arg; }

    get id() { return this._id; }
    set id(arg) { this._id = arg; }
}


class Ref_Person {
    constructor(id) {
        this._id = id;
    }

    get name() { return this._name; }
    set name(arg) { this._name = arg; }

    get id() { return this._id; }
}

module.exports = {
    Person, Ref_Person
}