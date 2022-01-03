// parameterize function
function tenPercentRaise(person) {
    return person.salary * 1.1;
}

function fivePercentRaise(person) {
    return person.salary * 1.05;
}


// refactor
// parameterize function
function raise(person, factor) {
    return person.salary * factor;
}

module.exports = {
    tenPercentRaise, fivePercentRaise, raise
}