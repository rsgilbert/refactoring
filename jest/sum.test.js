const sum = require('./sum.js')
// import sum from './sum.js'

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
})

// matchers
test('two plus two is four', () => {
    let t = expect(2 + 2).toBe(4)
    const k = expect(5 + 3)
})