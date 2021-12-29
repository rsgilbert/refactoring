// Substitute algorithm
const test = require('../test-utils')


function original_foundPerson(people) {
    for(let i = 0; i < people.length; i++) {
        if(people[i] === 'Don') {
            return 'Don'
        }
        if(people[i] === 'John') {
            return 'John'
        }
        if(people[i] === 'Kent') {
            return 'Kent'
        }
    }
    return ''
}


function foundPerson(people) {
    const candidates = ['Don', 'John','Kent']
    let result = people.find(p => candidates.includes(p));
    result = result || '';
    return result;
}

// tests capture behaviour of the code.
test.test(function returnsFoundNameTest(){
    const people = ['Jack', 'Don']
    test.testEqual(foundPerson(people), 'Don')
})

test.test(function returnsBlankIfNoneFoundTest() {
    const people = ['Chameleon']
    test.testEqual(foundPerson(people), '')
})

test.test(function returnsBlankIfPeopleIsEmpty(){
    test.testEqual(foundPerson([]), '')
});

test.test(function returnsFirstPersonFoundTest() {
    const people = ['Mulega', 'Kent', 'Don']
    test.testEqual(foundPerson(people), 'Kent')
});