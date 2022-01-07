// preserve whole object


class HeatingPlan {
    #temperatureRange;
    constructor(temperatureRange) {
        this.#temperatureRange = temperatureRange;
    }
    withinRange(bottom, top) {
        return (bottom >= this.#temperatureRange.low) &&
            (top <= this.#temperatureRange.high);
    }

    /**
     * 
     * @param {{ bottom: number, top: number }} numberRange 
     */
    ref_withinRange(numberRange) {
        return (numberRange.bottom >= this.#temperatureRange.low) &&
            (numberRange.top <= this.#temperatureRange.high);
    }

    // composed from a series of refactorings
    xx_isWithinRange(range) {
        return this.withinRange(range.bottom, range.top);
    }
}


module.exports = HeatingPlan; 




