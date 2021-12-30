// move statements into function
const test = require('../test-utils')



function renderPerson(person) {
    const result = [];
    result.push(`<p>${person.name}</p>`)
    // result.push(renderPhoto(person.photo))
    result.push(`<p>title: ${person.photo.title}</p>`)
    result.push(emitPhotoData(person.photo))
    return result.join('\n')
}

function photoDiv(p) {
    return [
        '<div>',
        `<p>title: ${p.title}</p>`,
        emitPhotoData(p),
        '</div>'
    ].join('\n');
}

function emitPhotoData(aPhoto) {
    const result = [];
    result.push(`<p>location: ${aPhoto.location}</p>`);
    result.push(`<p>date: ${aPhoto.date.toDateString()}</p>`);
    return result.join('\n');
}

const person = () => ({
    name: 'James',
    photo: {
        title: 'The Wedding',
        location: 'Apac',
        date: new Date('2020-05-21')
    }
});

test.skip(function renderPersonTest() {
    const renderOutput = renderPerson(person());
    // console.log(renderOutput);
    const expectedOutput = `<p>James</p>
<p>title: The Wedding</p>
<p>location: Apac</p>
<p>date: Thu May 21 2020</p>`;
    test.testEqual(renderOutput, expectedOutput);
    test.testEqual(renderOutput.length, expectedOutput.length);
});


test.skip(function photoDivTest() {
    const renderOutput = photoDiv(person().photo);
    // console.log(renderOutput);
    const expectedOutput = `<div>
<p>title: The Wedding</p>
<p>location: Apac</p>
<p>date: Thu May 21 2020</p>
</div>`;
    test.testEqual(renderOutput, expectedOutput);
    test.testEqual(renderOutput.length, expectedOutput.length);
});

// refactor
// move statement above emitPhotoData

function emitTitleAndPhotoData(aPhoto) {
    const result = [];
    result.push(`<p>title: ${aPhoto.title}</p>`);
    result.push(`<p>location: ${aPhoto.location}</p>`);
    result.push(`<p>date: ${aPhoto.date.toDateString()}</p>`);
    return result.join('\n');
}
function renderPerson2(person) {
    const result = [];
    result.push(`<p>${person.name}</p>`);
    result.push(emitTitleAndPhotoData(person.photo));
    return result.join('\n');
}

function photoDiv2(p) {
    return [
        '<div>',
        emitTitleAndPhotoData(p),
        '</div>'
    ].join('\n');
}


test.test(function ref_renderPersonTest() {
    const renderOutput = renderPerson2(person());
    const expectedOutput = `<p>James</p>
<p>title: The Wedding</p>
<p>location: Apac</p>
<p>date: Thu May 21 2020</p>`;
    test.testEqual(renderOutput, expectedOutput);
    test.testEqual(renderOutput.length, expectedOutput.length);
});


test.test(function ref_photoDivTest() {
    const renderOutput = photoDiv2(person().photo);
    // console.log(renderOutput);
    const expectedOutput = `<div>
<p>title: The Wedding</p>
<p>location: Apac</p>
<p>date: Thu May 21 2020</p>
</div>`;
    test.testEqual(renderOutput, expectedOutput);
    test.testEqual(renderOutput.length, expectedOutput.length);
});

