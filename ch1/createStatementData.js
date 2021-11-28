
// performance calculator class
// Pattern: Replace Conditional With Polymorphism
class PerformanceCalculator {
    constructor(aPerformance, play) {
        this.performance = aPerformance;
        this.play = play;
    }

    // Extract amountFor function
    // Pattern: Extract Function
    // Pattern: Move Function
    get amount() {
        throw new Error('subclass responsibility')
    }


    // Calculate volume credits for a performance
    // Pattern: Extract function
    // Pattern: Move function
    get volumeCredits() {
        return Math.max(this.performance.audience - 30, 0)
    }
}

class TragedyCalculator extends PerformanceCalculator {
    get amount() {
        let result = 40000;
        if(this.performance.audience > 30) {
            result += 1000 * (this.performance.audience - 30);            
        }
        return result;
    }
}

class ComedyCalculator extends PerformanceCalculator {
    get amount() {
        let result = 30_000;
        if(this.performance.audience > 20) {
            result += 10_000 + 500 * (this.performance.audience - 20)
        }
        result += 300 * this.performance.audience;
        return result;
    }

    get volumeCredits() {
        // add extra credit for every ten commedy attendees
        return super.volumeCredits + Math.floor(this.performance.audience / 10)
    }
}


export default function createStatementData(invoice, plays) {
    const result = {}
    result.customer = invoice.customer;
    result.performances = invoice.performances.map(enrichPerformance);
    result.totalVolumeCredits = totalVolumeCredits(result);
    result.totalAmount = totalAmount(result)
    return result;

    
    // Enrich the performance record with data from the play
    // Pattern: Move function
    // Pattern: Replace Constructor With Factory
    function enrichPerformance(aPerformance) {
        const calculator = createPerformanceCalculator(aPerformance, playFor(aPerformance))
        const result = Object.assign({}, aPerformance)
        result.play = calculator.play;
        result.amount = calculator.amount;
        result.volumeCredits = calculator.volumeCredits;
        return result;
    }

    function createPerformanceCalculator(aPerformance, aPlay) {
        switch(aPlay.type) {
            case 'tragedy':
                return new TragedyCalculator(aPerformance, aPlay);
            case 'comedy':
                return new ComedyCalculator(aPerformance, aPlay);
            default:
                throw new Error(`unknown type: ${aPlay.type}`)
        }
    }

    

    // Extract getting play for a given performance
    // Pattern: Replace Temp with Query
    function playFor(aPerformance) {
        return plays[aPerformance.playID]
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