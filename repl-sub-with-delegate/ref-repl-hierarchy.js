// Replacing a hierarchy

function createBird(data) {
    return new Bird(data);
}

class Bird {
    _name;
    // Refactor. Step 2. Add delegate field
    _speciesDelegate;

    constructor(data) {
        this._name = data.name;
        this._speciesDelegate = this.selectSpeciesDelegate(data);
    }

    get speciesDelegate() { return this._speciesDelegate; }

    get name() {return this._name; }

    get plumage() { 
        return this.speciesDelegate.plumage;
    }

    get airSpeedVelocity() { 
        return this.speciesDelegate.airSpeedVelocity;
    }

    /** Applies only to AfricanSwallow */
    get numberOfCoconuts() { return this.speciesDelegate.numberOfCoconuts; }

    selectSpeciesDelegate(data) {
        switch(data.type) {
            case 'EuropeanSwallow': return new EuropeanSwallowDelegate(data, this);
            case 'AfricanSwallow': return new AfricanSwallowDelegate(data, this);
            case 'NorwegianBlueParrot': return new NorwegianBlueParrotDelegate(data, this);
        }
        return new SpeciesDelegate(this);
    }
}


class SpeciesDelegate {
    _host;
    _plumage;
    constructor(data, host) {
        this._plumage = data.plumage;
        this._host = host;
    }
    get plumage() {
        return this._plumage || 'average'; 
    }

    get airSpeedVelocity() { return null; }

}

class EuropeanSwallowDelegate extends SpeciesDelegate {
    get airSpeedVelocity() { return 35; }

}

class AfricanSwallowDelegate extends SpeciesDelegate {
    _numberOfCoconuts;
    constructor(data, host) {
        super(data, host);
        this._numberOfCoconuts = 5;
    }
    get airSpeedVelocity() { 
        return 42;
    }
    get numberOfCoconuts() { return this._numberOfCoconuts; }
}

class NorwegianBlueParrotDelegate extends SpeciesDelegate {
    constructor(data, host) {
        super(data, host);
        this._voltage = 55;
        this._isNailed = true;
    }
    get airSpeedVelocity() {
        return this._voltage / 10;
    }
    get plumage() {
        return 77
    }
}



module.exports = {
    createBird
}