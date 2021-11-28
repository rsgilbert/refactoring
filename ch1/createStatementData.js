
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
        let result = 0;
        switch(this.play.type) { 
            case 'tragedy':
                result = 40000;
                if(this.performance.audience > 30) {
                    result += 1000 * (this.performance.audience - 30);            
                }
                break;
            case 'comedy':
                result = 30000;
                if(this.performance.audience > 20) {
                    result += 10000 + 500 * (this.performance.audience - 20)
                }
                result += 300 * this.performance.audience;
                break;
            default:
                throw new Error(`unknown type: ${this.play.type}`)
        }
        return result;
    }


    // Calculate volume credits for a performance
    // Pattern: Extract function
    // Pattern: Move function
    get volumeCredits() {
        let result = Math.max(this.performance.audience - 30, 0)

        // add extra credit for every ten commedy attendees
        if('comedy' === this.play.type) 
            result += Math.floor(this.performance.audience / 10)
        
        return result;
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