const test = require('../test-utils')
function programmers(input) {
    const names = [];
    for(const i of input) {
        if(i.job === 'programmer') {
            names.push(i.name);
        }
    }
    return names;
}

const people = () => [
    { job: 'programmer', name: 'Jeff' },
    { job: 'mechanic', name: 'Kane' },
    { job: 'programmer', name: 'Harry' },
    { job: 'programmer', name: 'Mukisa' },
]

test.skip(function programmersTest() {
    const pr = programmers(people());
    test.testEqual(pr.length, 3);
    test.testEqual(pr[2], 'Mukisa');
});

// refactor 
function ref_programmers(input) {
    return input
        .filter(i => i.job === 'programmer')
        .map(i => i.name);
}

test.test(function ref_programmersTest() {
    const pr = ref_programmers(people());
    test.testEqual(pr.length, 3);
    test.testEqual(pr[2], 'Mukisa');
});
