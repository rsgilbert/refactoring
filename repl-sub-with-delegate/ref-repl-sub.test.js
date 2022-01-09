const { describe, it, beforeEach } = require('@jest/globals')
const { Booking, PremiumBooking, createBooking, createPremiumBooking } = require('./ref-repl-sub.js')
const assert = require('assert')


// Step 1. Replace Constructor with Factory Function.

describe('original', function () {
    describe('booking', function () {
        /** @type Booking */
        let booking;
        let show = { price: 500, talkback: true }
        const date = new Date();
        beforeEach(function () {
            booking = createBooking(show, date);
        });
        it('gives correct base price', function () {
            assert.strictEqual(booking.basePrice, 500)
        });
        it('gives correct hasTalkback', function () {
            assert.strictEqual(booking.hasTalkback, false);
            booking.isPeakday = true;
            assert.strictEqual(booking.hasTalkback, true)
        });
    });

    describe('premium booking', function () {
        /** @type PremiumBooking */
        let premiumBooking;
        let show = { price: 500, talkback: true }
        const date = new Date();
        let extras = { premiumFee: 400 }
        beforeEach(function () {
            premiumBooking = createPremiumBooking(show, date, extras);
        });
        it('gives correct base price', function () {
            assert.strictEqual(premiumBooking.basePrice, 900);
        });
        it('gives correct hasTalkback', function () {
            assert.strictEqual(premiumBooking.hasTalkback, true);
        });
        it('gives correct hasDinner', function () {
            assert.strictEqual(premiumBooking.hasDinner, false);
            premiumBooking = createPremiumBooking(show, date, { ...extras, dinner: true });
            assert.strictEqual(premiumBooking.hasDinner, true);
        });
    });
});