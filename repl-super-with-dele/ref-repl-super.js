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

class CatalogRepository {
    _catalogItems;
    /**
     * 
     * @param {CatalogItem[]} catalogItems 
     */
    constructor(catalogItems) {
        this._catalogItems = catalogItems;
    }

    add(catalogItem) { this._catalogItems.push(catalogItem); }


    get(id) {
        return this._catalogItems.find(c => c.id === id);
    }
}

const catalogRepo = new CatalogRepository([]);
catalogRepo.add(new CatalogItem('A1', 'First item', []));
catalogRepo.add(new CatalogItem('Z9', 'last item', ['revered']));

class Scroll {
    _id;
    _catalogItem;
    /**
     * 
     * @param {*} id 
     * @param {*} title 
     * @param {*} tags 
     * @param {Date} dateLastCleaned 
     */
    constructor(id, title, tags, dateLastCleaned, catalogId) {
        // super(id, title, tags);
        this._id = id;
        this._lastCleaned = dateLastCleaned;
        this._catalogItem = new CatalogItem(null, title, tags);
        this._catalogItem2 = catalogRepo.get(catalogId);
    }

    // Forwarding/delegating functions
    get id() { return this._id; }
    get catalogId() { return this._catalogItem2._id; }
    get title() { return this._catalogItem.title; }
    hasTag(arg) { return this._catalogItem.hasTag(arg); }

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




