import { plays, invoices } from './data.js'
import createStatementData from './createStatementData.js'


// Run the function and print result
// const result = statement(invoices[0], plays)
// console.log(result)

// Print html statement
const result = htmlStatement(invoices[0], plays)
console.log(result)


// code that prints the bill
function statement(invoice, plays) {
    return renderPlainText(createStatementData(invoice, plays));
}

function htmlStatement(invoice, plays) {
    return renderHtml(createStatementData(invoice, plays))
}

function renderHtml(data) {
    let result = `<h1>Statement for ${data.customer}</h1>\n`;
    result += `<table>\n`
    result += ` <tr><th>play</th><th>seats</th><th>costs</th></tr>`
    
    for(let perf of data.performances) {
        // print line for this order
        result += ` <tr>\n`
        result += ` <td>${perf.play.name}</td><td>${perf.audience}</td><td>${perf.amount}</td>`
        result += ` </tr>\n`
    }

    result += ` </table>\n`

    result += `<p>Amount owed is <em>${usd(data.totalAmount)}</em></p>\n`
    result += `<p>You earned <em>${data.totalVolumeCredits}</em> credits</p>\n`
    return result;  
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