const { printOwing, refPrintOwing } = require('./extract-fn')
const { describe, expect, test, jest: requiredJest } = require('@jest/globals')



describe('extract-fn', () => {    
    test('printOwing', () => {
        console.log = requiredJest.fn()
        // const logSpy = requiredJest.spyOn(console, 'log')
        // requiredJest.mock()
        const invoice = { customer: 'Matthew' }
        printOwing(invoice)
        expect(console.log).toHaveBeenCalled()
        expect(console.log).toHaveBeenCalledTimes(2)
    })


    test('refactored printOwing', () => {
        console.log = requiredJest.fn()
        // const logSpy = requiredJest.spyOn(console, 'log')
        // requiredJest.mock()
        const invoice = { customer: 'Matthew' }
        refPrintOwing(invoice)
        expect(console.log).toHaveBeenCalled()
        expect(console.log).toHaveBeenCalledTimes(2)
    })
})