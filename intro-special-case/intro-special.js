// introduce special case 

class Site {
    constructor() { this._customer = 'unknown'; }
    get customer() { return this._customer; }
    set customer(arg) { this._customer = arg; }
    get name(){ return this._name; }
    get amount() { return this._amount; }
    set amount(arg){ this._amount = arg; }
}

function customerName(site) {
    if(site.customer === 'unknown') {
        return 'occupant';
    }
    else return site.customer;
}

function plan(site) {
   return site.customer === 'unknown' 
        ? -1
        : site.amount;
}

function weeksDeliquent(site) {
    return site.customer === 'unknown' 
        ? -1
        : site.amount / 7;
}





module.exports = { Site, plan, weeksDeliquent, customerName } ;