// pull up field

class Person {
    _name;
}

class Engineer extends Person {
    get name() { return this._name; }
    set name(arg) { this._name = arg; }
}


class Teacher extends Person {
    get teacherName() { return this._name; }
    set teacherName(arg) { this._name = arg; }
}


module.exports = {
    Engineer,
    Teacher
}