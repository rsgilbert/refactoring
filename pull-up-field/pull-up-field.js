// pull up field

class Person {
}

class Engineer extends Person {
    #name; 

    get name() { return this.#name; }
    set name(arg) { this.#name = arg; }
}


class Teacher extends Person {
    #teacherName; 

    get teacherName() { return this.#teacherName; }
    set teacherName(arg) { this.#teacherName = arg; }
}


module.exports = {
    Engineer,
    Teacher
}