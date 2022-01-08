// replace command with function

class ChargeCalculator {
    constructor(customer, usage, provider) {
        this.customer = customer;
        this.usage = usage;
        this.provider = provider;
    }

    get baseCharge() {
        return this.customer.baseRate * this.usage;
    }

    execute() { 
        return this.baseCharge + this.provider.connectionCharge;
    }
}

// refactor
// replace command with function

class Ref_ChargeCalculator {
    // constructor(customer, usage, provider) {
    //     this.customer = customer;
    //     this.usage = usage;
    //     this.provider = provider;
    // }

    // get baseCharge() {
    //     const baseCharge = this.customer.baseRate * this.usage;
    //     return baseCharge;
    // }

    execute(customer, usage, provider) { 
        const baseCharge = customer.baseRate * usage;
        return baseCharge + provider.connectionCharge;
    }
}

function charge(customer, usage, provider) {
    const baseCharge = customer.baseRate * usage;
    return baseCharge + provider.connectionCharge;
    
    // return new Ref_ChargeCalculator(customer, usage, provider).execute(customer, usage, provider);
}


module.exports = {
    ChargeCalculator,
    charge
}


