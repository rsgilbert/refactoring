
class Booking {
    _show;
    _date;
    /** @type boolean */
    _isPeakday;
    /** @type PremiumBookingDelegate */
    _bookingDelegate;

    /**
     * 
     * @param {{ price: number, talkback?: boolean }} show 
     * @param {Date} date 
     */
    constructor(show, date) {
        this._show = show;
        this._date = date;
        this._bookingDelegate = new BookingDelegate(this);
    }

    get show(){ return this._show; }

    get isPeakday() { return this._isPeakday; }
    set isPeakday(arg) { this._isPeakday = arg; }

    get hasTalkback() {
        return this._bookingDelegate.hasTalkback
    }

    get basePrice() {
        return this._bookingDelegate.basePrice;
    }

    bePremium(extras) {
        this._bookingDelegate = new PremiumBookingDelegate(this, extras);
    }

    get hasDinner() {
        return this._bookingDelegate?.hasDinner;
    }

}


/** Base booking delegate. Applied extract superclass to PremiumBookingDelegate */
class BookingDelegate {
    _host;
    constructor(hostBooking) {
        this._host = hostBooking;
    }
    get hasTalkback() {
        return !!(this._host.show.hasOwnProperty('talkback') && this._host.isPeakday);
    }

    get basePrice() {
        let result = this._host.show.price;
        if(this._host.isPeakday) result += Math.round(result * 0.15);
        return result;
    }
}
/**
 *  Delegate class.
 */
class PremiumBookingDelegate extends BookingDelegate {
    /** @type Booking */
    _host;

    constructor(hostBooking, extras) {
        super(hostBooking);
        this._host = hostBooking;
        this._extras = extras;
    }

    // moved from PremiumBooking to here
    // Offers talkbacks on all days
    get hasTalkback() {
        return this._host.show.hasOwnProperty('talkback');
    }

    get basePrice() {
        return Math.round(super.basePrice + this._extras.premiumFee);
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






