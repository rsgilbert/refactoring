
export default function createStatementData(invoice, plays) {
    const result = {}
    result.customer = invoice.customer;
    result.performances = invoice.performances.map(enrichPerformance);
    result.totalVolumeCredits = totalVolumeCredits(result);
    result.totalAmount = totalAmount(result)
    return result;

    // Enrich the performance record with data from the play
    // Pattern: Move function
    function enrichPerformance(aPerformance) {
        const result = Object.assign({}, aPerformance)
        result.play = playFor(result)
        result.amount = amountFor(result)
        result.volumeCredits = volumeCreditsFor(result)
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
        switch(aPerformance.play.type) { 
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

    // Calculate volume credits for a performance
    // Pattern: Extract function
    function volumeCreditsFor(aPerformance) {
        let result = Math.max(aPerformance.audience - 30, 0)

        // add extra credit for every ten commedy attendees
        if('comedy' === aPerformance.play.type) 
        result += Math.floor(aPerformance.audience / 10)
        return result;
    }

    // Calculate total volume credits
    // Pattern: Split loop
    // Pattern: Slide statement
    // Pattern: Extract Function
    // Pattern: Replace Temp With Query
    // Pattern: Inline variable
    // Pattern: Replace loop with pipeline
    function totalVolumeCredits(data) {
        return data.performances   
            .reduce((total, p) => total + p.volumeCredits, 0);
    }

    function totalAmount(data) {
        return data.performances
            .reduce((total, p) => total + p.amount, 0);
    }
}