// replace derived variable with with query
const test = require('../test-utils');
const assert = require('assert');

class ProductionPlan {
    constructor(){
        this._production = 0;
        this._adjustments = [];
    }
    get production() {
        assert.strictEqual(this._production, this.calculatedProduction())
        //  return this._production;
        return this.calculatedProduction();
    }
    applyAdjustment(anAdjustment) {
        this._adjustments.push(anAdjustment);
        this._production += anAdjustment.amount;
    }
    calculatedProduction() {
        return this._adjustments    
            .reduce((sum, a) => sum + a.amount, 0);
    }
}



class ProductionPlan2 {
    constructor(production){
        this._initialProduction = production;
        this._adjustments = [];
    }
    get production() {
        return this._adjustments    
            .reduce((sum, a) => sum + a.amount, this._initialProduction);
    }
    applyAdjustment(anAdjustment) {
        this._adjustments.push(anAdjustment);
    }
}

// when there is more than one source for the derived variable
// in this case we have the initial production in constructor 
// and the adjustment amounts
class ProductionPlan3 {
    constructor(production){
        this._production = production;
        this._adjustments = [];
    }
    get production() {
        return this._production;
    }
    applyAdjustment(anAdjustment) {
        this._adjustments.push(anAdjustment);
        this._production += anAdjustment.amount;
    }
}


// refactor 
// first we apply split variable on this._production to get another variable called this._initialProduction
// second we apply replace derived variable with query on this._production
// This is very interesting :)
class Ref_ProductionPlan3 {
    constructor(production){
        this._initialProduction = production;
        this._adjustments = [];
    }
    get production() {
        return this._initialProduction + this.calculatedProduction();
    }
    applyAdjustment(anAdjustment) {
        this._adjustments.push(anAdjustment);
    }
    calculatedProduction() {
        return this._adjustments
            .reduce((sum, a) => sum + a.amount, 0);
    }
}



test.test(function productionTest() {
    const plan = new Ref_ProductionPlan3(20);
    plan.applyAdjustment({ amount: 50 });
    test.testEqual(plan.production, 70);
    plan.applyAdjustment({ amount: 30 });
    test.testEqual(plan.production, 100);
});




