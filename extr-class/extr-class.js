// extract class
class Person {
    #officeAreaCode;
    #officeNumber;

    constructor(officeAreaCode, officeNumber){
        this.#officeAreaCode = officeAreaCode;
        this.#officeNumber = officeNumber;
    }
   
    get officeAreaCode() { return this.#officeAreaCode; }
    get officeNumber() { return this.#officeNumber; }
}

const p = new Person(20, 1348);
console.log(p.officeAreaCode);

// refactor
class Person2 {
    /** @type { TelephoneNumber } - telephone number */
    #telephoneNumber;

    constructor(officeAreaCode, officeNumber){
        this.#telephoneNumber = new TelephoneNumber(officeAreaCode, officeNumber);
    }
   
    get officeAreaCode() { return this.#telephoneNumber.areaCode; }
    get officeNumber() { return this.#telephoneNumber.number; }
    get d() { return this.#telephoneNumber; }
}


class TelephoneNumber {
    /** @type number */
    #areaCode;
    /** @type number */
    #number;
    constructor(areaCode, number) {
        this.#areaCode = areaCode;
        this.#number = number;
    }
    get areaCode() {
        return this.#areaCode;
    }
    get number() {
        return this.#number;
    }
}

const p2 = new Person2(20, 1348);
console.log(p2.officeAreaCode);