function test(expected, present) {
    (expected === present) ?
        console.log('OK')
        : console.log('Failed. Expected', expected, 'got', present) 

}

module.exports = test;