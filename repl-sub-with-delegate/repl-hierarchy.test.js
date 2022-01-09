const { describe } = require('@jest/globals')
const { EuropeanSwallow, AfricanSwallow, NorwegianBlueParrot } = require('./repl-hierarchy.js')
const assert = require('assert')

describe('original', function () {
    const data = { name: 'my-bird', plumage: 18 }
    it('european swallow', function () {
        const bird = new EuropeanSwallow(data);
        assert.strictEqual(bird.airSpeedVelocity, 35)
        assert.strictEqual(bird.name, 'my-bird');
        assert.strictEqual(bird.plumage, 18)
    });

    it('african swallow', function () {
        const bird = new AfricanSwallow(data);
        assert.strictEqual(bird.airSpeedVelocity, 42)
        assert.strictEqual(bird.name, 'my-bird');
        assert.strictEqual(bird.plumage, 18)
        assert.strictEqual(bird.numberOfCoconuts, 5)
    });

    it('norwegian blue parrot', function () {
        const bird = new NorwegianBlueParrot(data);
        assert.strictEqual(bird.airSpeedVelocity, 5.5)
        assert.strictEqual(bird.name, 'my-bird');
        assert.strictEqual(bird.plumage, 77);
    });
})