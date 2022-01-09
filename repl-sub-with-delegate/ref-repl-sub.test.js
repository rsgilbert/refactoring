const { describe, it, beforeEach } = require('@jest/globals')
const { Booking, PremiumBooking } = require('./ref-repl-sub.js')
const assert = require('assert')


describe('original', function () {
    describe('booking', function () {
        /** @type Booking */
        let booking;
        let show = { price: 500, talkback: true }
        const date = new Date();
        beforeEach(function () {
            booking = new Booking(show, date);
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
            premiumBooking = new PremiumBooking(show, date, extras);
        });
        it('gives correct base price', function () {
            assert.strictEqual(premiumBooking.basePrice, 900);
        });
        it('gives correct hasTalkback', function () {
            assert.strictEqual(premiumBooking.hasTalkback, true);
        });
        it('gives correct hasDinner', function () {
            assert.strictEqual(premiumBooking.hasDinner, false);
            premiumBooking = new PremiumBooking(show, date, { ...extras, dinner: true });
            assert.strictEqual(premiumBooking.hasDinner, true);
        });
    });
});