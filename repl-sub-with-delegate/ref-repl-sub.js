
class Booking {
    _show;
    _date;
    /** @type boolean */
    _isPeakday;
    /** @type PremiumBookingDelegate */
    _premiumDelegate;

    /**
     * 
     * @param {{ price: number, talkback?: boolean }} show 
     * @param {Date} date 
     */
    constructor(show, date) {
        this._show = show;
        this._date = date;
    }

    get show(){ return this._show; }

    get isPeakday() { return this._isPeakday; }
    set isPeakday(arg) { this._isPeakday = arg; }

    get isPremiumDelegatePresent() {
        return !!this._premiumDelegate;
    }

    get hasTalkback() {
        return (this.isPremiumDelegatePresent)
            ? this._premiumDelegate.hasTalkback
            : !!(this._show.hasOwnProperty('talkback') && this.isPeakday);
    }

    get defaultBasePrice() {
        let result = this._show.price;
        if(this.isPeakday) result += Math.round(result * 0.15);
        return result;
    }

    get basePrice() {
        return (this.isPremiumDelegatePresent)
            ? this._premiumDelegate.basePrice
            : this.defaultBasePrice
    }

    // alternative approach.
    // Recast delegate's method as extension of base method
    get basePrice2() {
        let result = this._show.price;
        if(this.isPeakday) result += Math.round(result * 0.15);
        if(this.isPremiumDelegatePresent) 
            result = this._premiumDelegate.basePrice2(result)
        return result;
    }


    bePremium(extras) {
        this._premiumDelegate = new PremiumBookingDelegate(this, extras);
    }

    get hasDinner() {
        return this._premiumDelegate?.hasDinner;
    }

}


// class PremiumBooking extends Booking {
//     _extras;

//     /**
//      * 
//      * @param {{ price: number }} show 
//      * @param {Date} date 
//      * @param {{ premiumFee: number, dinner?: boolean }} extras 
//      */
//     constructor(show, date, extras) {
//         super(show, date);
//         this._extras = extras;
//     }

// }



/**
 *  Delegate class.
 */
class PremiumBookingDelegate {
    /** @type Booking */
    _host;

    constructor(hostBooking, extras) {
        this._host = hostBooking;
        this._extras = extras;
    }

    // moved from PremiumBooking to here
    // Offers talkbacks on all days
    get hasTalkback() {
        return this._host.show.hasOwnProperty('talkback');
    }

    get basePrice() {
        return Math.round(this._host.defaultBasePrice + this._extras.premiumFee);
    }
    basePrice2(base) {
        return Math.round(base + this._extras.premiumFee);
    }

    get hasDinner() {
        return this._extras.hasOwnProperty('dinner');
    }

}

function createBooking(show, date){
    return new Booking(show, date)
}

// Modify factory to also create delegate object and add it to superclass as a field.
function createPremiumBooking(show, date, extras){
    // Towards the last steps
    // Change from constructing subclass to constructing superclass.
    const result = new Booking(show, date);
    result.bePremium(extras);
    return result;
}

module.exports = {
    Booking, 
    // PremiumBooking,
    createBooking, createPremiumBooking
}






