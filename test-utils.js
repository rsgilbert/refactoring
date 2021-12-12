function test(expected, present) {
    (expected === present) ?
        console.log('OK')
        : console.log('Failed. Expected', expected, 'got', present) 

}

function testEqual(expected, present) {
    (expected === present) ?
        console.log('OK')
        : console.log('Failed. Expected', expected, 'got', present) 

}

function testTrue(present) {
    (present === true) ?
    console.log('OK')
    : console.log('Failed. Expected true, present is', present) 
}

function testFalse(present) {
    (present === false) ?
    console.log('OK')
    : console.log('Failed. Expected false, present is', present) 
}

test.testEqual = testEqual;
test.testTrue = testTrue;
test.testFalse = testFalse;


module.exports = test;
