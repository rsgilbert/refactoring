
class Booking {
    _show;
    _date;
    /** @type boolean */
    _isPeakday;

    /**
     * 
     * @param {{ price: number, talkback?: boolean }} show 
     * @param {Date} date 
     */
    constructor(show, date) {
        this._show = show;
        this._date = date;
    }

    get isPeakday() { return this._isPeakday; }
    set isPeakday(arg) { this._isPeakday = arg; }
    get hasTalkback() {
        return !!(this._show.hasOwnProperty('talkback') && this.isPeakday);
    }

    get basePrice() {
        let result = this._show.price;
        if(this.isPeakday) result += Math.round(result * 0.15);
        return result;
    }
}


class PremiumBooking extends Booking {
    _extras;

    /**
     * 
     * @param {{ price: number }} show 
     * @param {Date} date 
     * @param {{ premiumFee: number, dinner?: boolean }} extras 
     */
    constructor(show, date, extras) {
        super(show, date);
        this._extras = extras;
    }

    // Offers talkbacks on all days
    get hasTalkback() {
        return this._show.hasOwnProperty('talkback');
    }

    get basePrice() {
        return Math.round(super.basePrice + this._extras.premiumFee);
    }

    get hasDinner() {
        return this._extras.hasOwnProperty('dinner');
    }
}


module.exports = {
    Booking, PremiumBooking
}






