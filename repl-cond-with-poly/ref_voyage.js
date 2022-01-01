function rating(voyage, history) {
    return createRating(voyage, history).value;
}

// base class for Rating
class Rating {
    constructor(voyage, history) {
        this.voyage = voyage;
        this.history = history;
    }

    get value() {
        const vpf = this.voyageProfitFactor();
        const vr = this.voyageRisk()
        const chr = this.captainHistoryRisk()
        if(vpf * 3 > (vr + chr * 2)) return 'A';
        else return 'B';
    }

    voyageRisk() {
        let result = 1;
        if(this.voyage.length > 4) result += 2;
        if(this.voyage.length > 8) result += this.voyage.length - 8;
        if(['china', 'east-indies'].includes('voyage.zone')) result += 4;
        return Math.max(result, 0);
    }

    captainHistoryRisk() {
        let result = 1;
        if(this.history.length < 5) result += 4;
        result += this.history.filter(v => v.profit < 0).length;
        return Math.max(result, 0);
    }

    hasChina() {
        return this.history.some(v => 'china' === v.zone);
    }

    // extract conditional
    extraVoyageProfitFactor() {
        let result = 0;
        if(this.history.length > 8) result += 1;
        if(this.voyage.length > 14) result -= 1;
        return result;
    }

    voyageProfitFactor() {
        let result = 2;
        if(this.voyage.zone === 'china') result += 1;
        if(this.voyage.zone === 'east-indies') result += 1;
        // extract function
        result += this.extraVoyageProfitFactor();
        return result;
    }
}


class ExperiencedChinaRating extends Rating {
    captainHistoryRisk() {
        const result = super.captainHistoryRisk() - 2;
        return Math.max(result, 0);
    }
    extraVoyageProfitFactor() {
        let result = 3;
        if(this.history.length > 10) result += 1;
        if(this.voyage.length > 12) result += 1;
        if(this.voyage.length > 18) result -= 1;
        return result;
    }
}

function createRating(voyage, history) {
    if(voyage.zone === 'china' && history.some(v => 'china' === v.zone)) 
        return new ExperiencedChinaRating(voyage, history);
    else return new Rating(voyage, history);
}

module.exports.rating = rating;
