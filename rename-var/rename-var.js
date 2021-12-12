const test = require("../test-utils")


// let a = height * width;

// Refactor
// let area = height * width;


// Initial state 
let tpHd = 'untitled'
result = `<h1>${tpHd}</h1>`
tpHd = 'Changed to potato'

// tpHd has a wider scope than just a single function.
// First encapsulate variable
// function title() { return tpHd; }
// function setTitle(arg) {
//     tpHd = arg;
// }

// result = `<h1>${title()}</h1>`
// setTitle('Changed to potato')

// test.test(function tpHdTest() {
//     test.testEqual(tpHd, 'Changed to potato')
// })

// now rename var
let _title = 'untitled'
function title() { return _title; }
function setTitle(arg) {
    _title = arg;
}

result = `<h1>${title()}</h1>`
setTitle('Changed to potato eggs')

test.test(function tpHdTest() {
    test.testEqual(title(), 'Changed to potato eggs')
})

// const cpyNm = 'Dundu'

// refactor - Rename variable
// First make a copy
const companyName = 'Dundu'
const cpyNm = companyName

console.log(cpyNm)