function getRating(driver) {
    return moreThanFiveLateDeliveries(driver) ? 2 : 1;
}

function moreThanFiveLateDeliveries(driver) {
    return driver.numberOfLateDeliveries > 5;
}

let driver1 = { numberOfLateDeliveries: 8 }
let driver2 = { numberOfLateDeliveries: 1 }

// console.log(getRating(driver1))
// console.log(getRating(driver2))

// Refactor
function refactor_getRating(driver) {
    return (driver.numberOfLateDeliveries > 5) ? 2 : 1;
}

// console.log(refactor_getRating(driver1))
// console.log(refactor_getRating(driver2))

function reportLines(aCustomer) {
    const lines = []
    gatherCustomerData(lines, aCustomer)
    return lines    
}

function gatherCustomerData(out, aCustomer) {
   

}

const cust = { name: 'Merry', location: 'Ntinda' }
// console.log(reportLines(cust))

function refactor_reportLines(aCustomer) {
    const lines = []
    lines.push(['name', aCustomer.name])
    lines.push(['location', aCustomer.location])
    return lines
}
console.log(refactor_reportLines(cust))