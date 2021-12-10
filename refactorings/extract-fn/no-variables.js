class ClockClass {
    get today() {
        return new Date()
    }
}

const Clock = new ClockClass();

function printOwing(invoice) {
    let outstanding = 0;

    console.log('*************')
    console.log('**** Customer owes *****')
    console.log('*************')

    // calculate outstanding
    for(const o of invoice.orders) {
        outstanding += o.amount;
    }

    // record due date 
    const today = Clock.today;
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate())

    // print details
    console.log(`name: ${invoice.customer}`)
    console.log(`amount: ${outstanding}`)
    console.log(`due: ${invoice.dueDate.toLocaleDateString()}`)
}

// refactor

function refactor_printOwing(invoice) {
    printBanner()
    const outstanding = outstandingFor(invoice)
    recordDueDate(invoice) 
    printDetails(invoice, outstanding)

    // logic ends here

    function printBanner() {
        console.log('*************')
        console.log('**** Customer owes *****')
        console.log('*************')    
    }

    function printDetails(invoice, outstanding){ 
        console.log(`name: ${invoice.customer}`)
        console.log(`amount: ${outstanding}`)
        console.log(`due: ${invoice.dueDate.toLocaleDateString()}`)
    }
    
    function recordDueDate(invoice) {
        const today = Clock.today;
        invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate())    
    }

    function outstandingFor(invoice) {
        let result = 0;
        for(const o of invoice.orders) {
            result += o.amount;
        }
        return result;
    }
}

// printOwing({
//     customer: 'Jeff',
//     orders: [{ amount: 50 }, { amount: 30 }]
// })


refactor_printOwing({
    customer: 'Jeff',
    orders: [{ amount: 50 }, { amount: 30 }]
})