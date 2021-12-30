// slide statements

/*
const pricingPlan = retrievePricingPlan();
const order = retrieveOrder();
const baseCharge = pricingPlan.base;
let charge ;
const chargePerUnit = pricingPlan.unit;
const units = order.units;
let discounts;
charge = baseCharge + units * chargePerUnit;
let discountableUnits = Math.max(units - pricingPlan.discountThreshold);
discount = discountableUnits * pricingPlan.discountFactor;
if(order.isRepeat) discount += 20;
charge = charge - discount;
chargeOrder(charge); 
*/

// refactor 
// Slide statements

const pricingPlan = retrievePricingPlan();
const baseCharge = pricingPlan.base;
let charge ;
const chargePerUnit = pricingPlan.unit;
const order = retrieveOrder();
const units = order.units;
charge = baseCharge + units * chargePerUnit;
let discountableUnits = Math.max(units - pricingPlan.discountThreshold);
let discounts;
discount = discountableUnits * pricingPlan.discountFactor;
if(order.isRepeat) discount += 20;
charge = charge - discount;
chargeOrder(charge); 



