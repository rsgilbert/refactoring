const { stat } = require('fs');
const { plays, invoices } = require('./data')

// Run the function and print result
const result = statement(invoices[0], plays)
console.log(result)


// code that prints the bill
function statement(invoice, plays) {
    let totalAmount = 0;
    let volumeCredits = 0;
    let result = `Statement for ${invoice.customer}\n`;
    const format = new Intl.NumberFormat(
        'en-US', { 
            style: 'currency', 
            currency: 'USD', 
            minimumFractionDigits: 2 
        })
        .format;
    for(let perf of invoice.performances) {
        // add volume credits
        volumeCredits += volumeCreditsFor(perf)

        // print line for this order
        result += `\t${playFor(perf).name}: ${format(amountFor(perf) / 100)} (${perf.audience} seats)\n`

        totalAmount += amountFor(perf);
    }

    result += `Amount owed is ${format(totalAmount / 100)}\n`
    result += `You earned ${volumeCredits} credits\n`
    return result;
}

// Calculate volume credits for a performance
// Pattern: Extract function
function volumeCreditsFor(perf) {
    // add volume credits
    let result = Math.max(perf.audience - 30, 0)

    // add extra credit for every ten commedy attendees
    if('comedy' === playFor(perf).type) 
       result += Math.floor(perf.audience / 10)
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

