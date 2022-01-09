const { describe } = require('@jest/globals')
const { createBird } = require('./ref-repl-hierarchy.js')
const assert = require('assert')

describe('original', function () {
    const data = { name: 'my-bird', plumage: 18 }
    it('european swallow', function () {
        const bird = createBird({ ...data, type: 'EuropeanSwallow' });
        assert.strictEqual(bird.airSpeedVelocity, 35)
        assert.strictEqual(bird.name, 'my-bird');
        assert.strictEqual(bird.plumage, 18)
    });

    it('african swallow', function () {
        const bird = createBird({ ...data, type: 'AfricanSwallow' });
        assert.strictEqual(bird.airSpeedVelocity, 42)
        assert.strictEqual(bird.name, 'my-bird');
        assert.strictEqual(bird.plumage, 18)
        assert.strictEqual(bird.numberOfCoconuts, 5)
    });

    it('norwegian blue parrot', function () {
        const bird = createBird({ ...data, type: 'NorwegianBlueParrot' });
        assert.strictEqual(bird.airSpeedVelocity, 5.5)
        assert.strictEqual(bird.name, 'my-bird');
        assert.strictEqual(bird.plumage, 77);
    });
})