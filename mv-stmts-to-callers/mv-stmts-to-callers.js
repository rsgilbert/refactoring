// move statements to callers
const test = require('../test-utils')

const person = () => ({
    name: 'James',
    photo: {
        title: 'The Wedding',
        location: 'Apac',
        date: new Date('2020-05-21')
    }
});

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


test.skip(function renderPersonTest() {
    const renderOutput = renderPerson2(person());
    const expectedOutput = `<p>James</p>
<p>title: The Wedding</p>
<p>location: Apac</p>
<p>date: Thu May 21 2020</p>`;
    test.testEqual(renderOutput, expectedOutput);
    test.testEqual(renderOutput.length, expectedOutput.length);
});


test.skip(function photoDivTest() {
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




// refactor
// move statements to callers

function titleFor(aPhoto) {
    const result = [];
    result.push(`<p>title: ${aPhoto.title}</p>`);
    return result.join('\n'); 
}

function renderPerson3(person) {
    const result = [];
    result.push(`<p>${person.name}</p>`);
    result.push(titleFor(person.photo));
    result.push(`<p>location: ${person.photo.location}</p>`);
    result.push(`<p>date: ${person.photo.date.toDateString()}</p>`);
    return result.join('\n');
}

function photoDiv3(p) {
    return [
        '<div>',
        titleFor(p),
        `<p>location: ${p.location}</p>`,
        `<p>date: ${p.date.toDateString()}</p>`,
        '</div>'
    ].join('\n');
}


test.test(function ref_renderPersonTest() {
    const renderOutput = renderPerson3(person());
    const expectedOutput = `<p>James</p>
<p>title: The Wedding</p>
<p>location: Apac</p>
<p>date: Thu May 21 2020</p>`;
    test.testEqual(renderOutput, expectedOutput);
    test.testEqual(renderOutput.length, expectedOutput.length);
});


test.test(function ref_photoDivTest() {
    const renderOutput = photoDiv3(person().photo);
    // console.log(renderOutput);
    const expectedOutput = `<div>
<p>title: The Wedding</p>
<p>location: Apac</p>
<p>date: Thu May 21 2020</p>
</div>`;
    test.testEqual(renderOutput, expectedOutput);
    test.testEqual(renderOutput.length, expectedOutput.length);
});