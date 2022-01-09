// Replacing a hierarchy

function createBird(data) {
    switch(data.type) {
        case 'EuropeanSwallow':
            return  new EuropeanSwallow(data);
        case 'AfricanSwallow':
            return new AfricanSwallow(data);
        case 'NorwegianBlueParrot':
            return new NorwegianBlueParrot(data);
        default:
            return new Bird(data);
    }
}

class Bird {
    _name;
    _plumage;
    constructor(data) {
        this._name =data.name;
        this._plumage = data.plumage;
    }
    get name() {return this._name; }
    get plumage() { return this._plumage || 'average'; }
    get airSpeedVelocity() { return null; }
}

class EuropeanSwallow extends Bird {
    get airSpeedVelocity() { return 35; }
}

class AfricanSwallow extends Bird {
    constructor(data) {
        super(data);
        this._numberOfCoconuts = 5;
    }
    get numberOfCoconuts() { return this._numberOfCoconuts; }
    get airSpeedVelocity() { 
        return 42;
    }
}

class NorwegianBlueParrot extends Bird {
    constructor(data) {
        super(data)
        this._voltage = 55;
        this._isNailed = true;
    }

    get plumage() {
        return 77
    }

    get airSpeedVelocity() {
        return this._voltage / 10;
    }
}



module.exports = {
    NorwegianBlueParrot,
    AfricanSwallow,
    EuropeanSwallow
}