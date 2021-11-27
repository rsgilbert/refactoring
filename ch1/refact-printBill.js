const { stat } = require('fs');
const { plays, invoices } = require('./data')

// Run the function and print result
const result = statement(invoices[0], plays)
console.log(result)


// code that prints the bill
function statement(invoice, plays) {
    // Extract getting play for a given performance
    // Pattern: Replace Temp with Query
    function playFor(aPerformance) {
        return plays[aPerformance.playID]
    }

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
        const play = playFor(perf)
        let thisAmount = amountFor(perf, play);
        
        // add volume credits
        volumeCredits += Math.max(perf.audience - 30, 0)

        // add extra credit for every ten commedy attendees
        if('comedy' === play.type) 
           volumeCredits += Math.floor(perf.audience / 10)
        
        // print line for this order
        result += `\t${play.name}: ${format(thisAmount / 100)} (${perf.audience} seats)\n`

        totalAmount += thisAmount;
    }

    result += `Amount owed is ${format(totalAmount / 100)}\n`
    result += `You earned ${volumeCredits} credits\n`
    return result;
}




// const result = statement(invoices[0], plays)
// console.log(result)


// Extract amountFor function

function amountFor(aPerformance, play) {
    let result = 0;
    switch(play.type) {
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
            throw new Error(`unknown type: ${play.type}`)
    }
    return result;

}

