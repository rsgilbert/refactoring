// replace query with parameter

const thermostat = {
    selectedTemperature: 10
}

class HeatingPlan {
    constructor(min, max) {
        this.min = min;
        this.max = max;
    }
    get targetTemperature(){
        if(thermostat.selectedTemperature > this.max) return this.max;
        else if(thermostat.selectedTemperature < this.min) return this.min;
        else return 0;
    }
}


class Ref_HeatingPlan {
    constructor(min, max) {
        this.min = min;
        this.max = max;
    }
    // get targetTemperature(){
    //     return this.xx_targetTemperature(thermostat.selectedTemperature);
    // }

    targetTemperature(selectedTemperature) {
        if(selectedTemperature > this.max) return this.max;
        else if(selectedTemperature < this.min) return this.min;
        else return 0;
    }
}


module.exports = {
    HeatingPlan,
    Ref_HeatingPlan
}