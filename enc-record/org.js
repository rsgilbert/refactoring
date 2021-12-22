const test = require('../test-utils')
const organization = { name: 'Tiktok', country: 'UG' }




test.test(function resultTest() {
    const result = `<h1>${organization.name}</h1>`
    organization.name = 'YouTube'
    test.testEqual(result, '<h1>Tiktok</h1>')
    test.testEqual(organization.name, 'YouTube')
})

