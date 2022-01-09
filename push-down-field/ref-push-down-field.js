// pull up field

class Person {
}

class Engineer extends Person {
    _name;
    get name() { return this._name; }
    set name(arg) { this._name = arg; }
}


class Teacher extends Person {
    // teacher no longer needs name
    // get teacherName() { return this._name; }
    // set teacherName(arg) { this._name = arg; }
}


module.exports = {
    Engineer,
    Teacher
}