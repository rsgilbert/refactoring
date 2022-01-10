// replace superclass with delegate

class CatalogItem {
    constructor(id, title, tags) {
        this._id = id;
        this._title = title;
        this._tags = tags;
    }

    get id() { return this._id; }
    get title() { return this._title; }
    hasTag(arg) { return this._tags.includes(arg); }
}


class Scroll extends CatalogItem {
    /**
     * 
     * @param {*} id 
     * @param {*} title 
     * @param {*} tags 
     * @param {Date} dateLastCleaned 
     */
    constructor(id, title, tags, dateLastCleaned) {
        super(id, title, tags);
        this._lastCleaned = dateLastCleaned;
    }

    get d() { return 1}
    needsCleaning(targetDate) {
        const threshold = this.hasTag('revered') ? 2 : 5;
        return this.daysSinceLastCleaning(targetDate) > threshold;
    }

    daysSinceLastCleaning(targetDate) {
        const elapsedMillis = targetDate - this._lastCleaned;
        const elapsedDays = elapsedMillis / 1000 / 3600 / 24
        return elapsedDays;
    }
}

module.exports = {
    Scroll
}




