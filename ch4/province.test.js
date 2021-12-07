// Testing using the Mocha framework
const { Province, sampleProvinceData } = require("./province.js")

describe('province', function() {
    let asia = new Province(sampleProvinceData())
    beforeEach(function() {
        asia = new Province(sampleProvinceData())
    })
    test('shortfall', function() {
        expect(asia.shortfall).toEqual(5)
      //  asia._demand = 5
    })

    test('profit', function() {
        expect(asia.profit).toEqual(230)
    })

    it('change production', () => {
        asia.producers[0].production = 20
        expect(asia.shortfall).toEqual(-6)
        expect(asia.profit).toEqual(292)
    })

    describe('no producers', function(){
        let noProducers;
        beforeEach(function() {
            const data = {
                name: 'No producers',
                producers: [],
                demand: 30,
                price: 20
            }
            noProducers = new Province(data)
        })

        it('shortfall', function(){ 
            expect(noProducers.shortfall).toEqual(30)
        })
        it('profit', function() {
            expect(noProducers.profit).toEqual(0)
        })
    })
    describe('zero demand', function() {
        beforeEach(() => {
            asia.demand = 0;
        })
        it('shortfall', () => {
            expect(asia.shortfall).toEqual(-25)
        })
        it('profit', () => {
            expect(asia.profit).toEqual(0)
        })
    })
    describe('negative demand', function() {
        beforeEach(() => {
            asia.demand = -1;
        })
        it('shortfall', () => {
            expect(asia.shortfall).toEqual(-26)
        })
        it('profit', () => {
            expect(asia.profit).toEqual(-10)
        })
    })
    describe('empty string demand', () => {
        beforeEach(() => asia.demand = '')
        it('shortfall', () => expect(asia.shortfall).toBeNaN())
        it('profit', () => expect(asia.profit).toEqual(Number.NaN))
    })
    it.skip('string for producers', () => {
        const data = {
            name: 'String producers',
            producers: '',
            demand: 30,
            price: 20
        }
        const prov = new Province(data)
        expect(prov.shortfall).toEqual(0)
    })
})


