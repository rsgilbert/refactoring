import { plays, invoices } from './data.js'
import createStatementData from './createStatementData.js'


// Run the function and print result
const result = statement(invoices[0], plays)
console.log(result)


// code that prints the bill
function statement(invoice, plays) {
    return renderPlainText(createStatementData(invoice, plays));
}

// code that prints the bill
// Pattern: Split Phase
function renderPlainText(data) {
    let result = `Statement for ${data.customer}\n`;
    
    for(let perf of data.performances) {
        // print line for this order
        result += `\t${perf.play.name}: ${usd(perf.amount)} (${perf.audience} seats)\n`
    }

    result += `Amount owed is ${usd(data.totalAmount)}\n`
    result += `You earned ${data.totalVolumeCredits} credits\n`
    return result;
    
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
}
