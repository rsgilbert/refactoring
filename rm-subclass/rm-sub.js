class Person {
    _name;
    constructor(name) {
        this._name = name;
    }
    get name() { return this._name; }
    get genderCode() { return 'X' }
}

class Male extends Person {
    get genderCode() { return 'M'}
}

class Female extends Person {
    get genderCode() { return 'F' }
}


// refactor

// Step 1. Encapsulate current representation to minimize impact
// on any client code. We encapsulate creation of subclasses by using
// Encapsulate Constructor with Factory Function.
// This will help keep all knowledge of subclasses to the superclass and factory.
class Ref_Person {
    _name;
    _genderCode;
    constructor(name, genderCode) {
        this._name = name;
        this._genderCode = genderCode;
    }
    get name() { return this._name; }
    get genderCode() { return this._genderCode; }

    isMale() {
        return this.genderCode === 'M'
        // wary. superclass is refering to a subclass.
        // return this instanceof Ref_Male;
    }

}

// class Ref_Male extends Ref_Person {
//     get genderCode() { return 'M'}
// }

// class Ref_Female extends Ref_Person {
//     get genderCode() { return 'F' }
// }

function createPerson(name) {
    return new Ref_Person(name, 'X')
}

function createMale(name) { return new Ref_Person(name, 'M'); } 

function createFemale(name) { return new Ref_Person(name, 'F'); }
// function createFemale(name) { return new Ref_Female(name); }

function createPersonFromRecord(record) {
    switch(record.gender) {
        case 'M':  return createMale(record.name)
        case 'F': return createFemale(record.name)
        default: return createPerson(record.name)
    }
}
module.exports = { Person, Male, Female, createFemale, createMale }
