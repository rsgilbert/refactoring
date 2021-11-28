const { stat } = require('fs');
const { plays, invoices } = require('./data')

// Run the function and print result
const result = statement(invoices[0], plays)
console.log(result)


// code that prints the bill
function statement(invoice, plays) {

    let result = `Statement for ${invoice.customer}\n`;
    
    for(let perf of invoice.performances) {
        // print line for this order
        result += `\t${playFor(perf).name}: ${usd(amountFor(perf))} (${perf.audience} seats)\n`
    }


    result += `Amount owed is ${usd(totalAmount())}\n`
    result += `You earned ${totalVolumeCredits()} credits\n`
    return result;
}

function totalAmount() {
    let invoice = invoices[0]
    let result = 0;
    for(let perf of invoice.performances) {
        result += amountFor(perf);
    }
    return result;
}

// Calculate total volume credits
// Pattern: Split loop
// Pattern: Slide statement
// Pattern: Extract Function
// Pattern: Replace Temp With Query
// Pattern: Inline variable
function totalVolumeCredits() {
    let result = 0;
    for(let perf of invoices[0].performances) {
        // add volume credits
        result += volumeCreditsFor(perf)
    }
    return result;
}

// Patern: Function variable to declared function 
// Pattern: Change Function Declaraton
// Replace temp variable format with declared function
// Because temporary variables are only useful within their routine.
function usd(aNumber) {
    return new Intl.NumberFormat(
        'en-US', { 
            style: 'currency', 
            currency: 'GBP', 
            minimumFractionDigits: 2 
        })
        .format(aNumber / 100)
}

// Calculate volume credits for a performance
// Pattern: Extract function
function volumeCreditsFor(aPerformance) {
    let result = Math.max(aPerformance.audience - 30, 0)

    // add extra credit for every ten commedy attendees
    if('comedy' === playFor(aPerformance).type) 
       result += Math.floor(aPerformance.audience / 10)
    return result;
}


// Extract getting play for a given performance
// Pattern: Replace Temp with Query
function playFor(aPerformance) {
    return plays[aPerformance.playID]
}

// Extract amountFor function
// Pattern: Extract Function
function amountFor(aPerformance) {
    let result = 0;
    switch(playFor(aPerformance).type) {
        case 'tragedy':
            result = 40000;
            if(aPerformance.audience > 30) {
                result += 1000 * (aPerformance.audience - 30);            
            }
            break;
        case 'comedy':
            result = 30000;
            if(aPerformance.audience > 20) {
                result += 10000 + 500 * (aPerformance.audience - 20)
            }
            result += 300 * aPerformance.audience;
            break;
        default:
            throw new Error(`unknown type: ${playFor(aPerformance).type}`)
    }
    return result;
}

