// replace conditional with polymorphism
const test = require('../test-utils')


function plumages(birds) {
    return new Map(birds.map(b => [b.name, plumage(b)]))
}

function speeds(birds) {
    return new Map(birds.map(b => [b.name, airSpeedVelocity(b)]))
}

function plumage(bird) {
    switch(bird.type) {
        case 'EuropeanSwallow':
            return 'average';
        case 'AfricanSwallow':
            return (bird.numberOfCoconuts > 2) ? 'tired' : 'average';
        case 'NorwegianBlueParrot':
            return (bird.voltage > 100) ? 'scorched' : 'beautiful';
        default:
            return 'unknown';
    }
}

function airSpeedVelocity(bird) {
    switch (bird.type) {
        case 'EuropeanSwallow':
            return 35;
        case 'AfricanSwallow':
            return 40 - 2 * bird.numberOfCoconuts;
        case 'NorwegianBlueParrot':
            return bird.voltage / 10;
        default:
            return null;
    }
}

const euroBird = () => ({ type: 'EuropeanSwallow' })
const africanBird = () => ({ type: 'AfricanSwallow', numberOfCoconuts: 4 })
const norwegianBird = () => ({ type: 'NorwegianBlueParrot', voltage: 50 })
const unknownBird = () => ({ });

// tests
test.skip(function plumageTest() {
    test.testEqual(plumage(euroBird()), 'average');
    test.testEqual(plumage(africanBird()), 'tired');
    test.testEqual(plumage(norwegianBird()), 'beautiful');
    test.testEqual(plumage(unknownBird()), 'unknown');
});

test.skip(function airSpeedVelocityTest() {
    test.testEqual(airSpeedVelocity(euroBird()), 35);
    test.testEqual(airSpeedVelocity(africanBird()), 32);
    test.testEqual(airSpeedVelocity(norwegianBird()), 5);
    test.testEqual(airSpeedVelocity(unknownBird()), null);
});

// refactor
// replace conditional with polymorphism
class Bird {
    constructor(birdObj) {
        Object.assign(this, birdObj);
    }

    get plumage() {
        return 'unknown';
    }

    get airSpeedVelocity() {
        return null;
    }
}

class EuropeanSwallow extends Bird {
    get plumage() { return 'average'; }
    get airSpeedVelocity() {
        return 35;
    }

}

class AfricanSwallow extends Bird {
    get plumage() {
        return (this.numberOfCoconuts > 2) ? 'tired' : 'average';
    }
    get airSpeedVelocity() { 
        return 40 - 2 * this.numberOfCoconuts
    }
}

class NorwegianBlueParrot extends Bird {
    get plumage() {
        return (this.voltage > 100) ? 'scorched' : 'beautiful';
    }
    get airSpeedVelocity() {
        return this.voltage / 10;
    }
}

function createBird(bird) {
    switch(bird.type) {
        case 'EuropeanSwallow': 
            return new EuropeanSwallow(bird);
        case 'AfricanSwallow':
            return new AfricanSwallow(bird);
        case 'NorwegianBlueParrot':
            return new NorwegianBlueParrot(bird);
        default:
            return new Bird(bird);
    }
}

function ref_plumage(bird) {
    return createBird(bird).plumage;
}

function ref_airSpeedVelocity(bird) {
    return createBird(bird).airSpeedVelocity;
}

test.test(function ref_plumageTest() {
    test.testEqual(ref_plumage(euroBird()), 'average');
    test.testEqual(ref_plumage(africanBird()), 'tired');
    test.testEqual(ref_plumage(norwegianBird()), 'beautiful');
    test.testEqual(ref_plumage(unknownBird()), 'unknown');
});

test.test(function ref_airSpeedVelocityTest() {
    test.testEqual(ref_airSpeedVelocity(euroBird()), 35);
    test.testEqual(ref_airSpeedVelocity(africanBird()), 32);
    test.testEqual(ref_airSpeedVelocity(norwegianBird()), 5);
    test.testEqual(ref_airSpeedVelocity(unknownBird()), null);
});

