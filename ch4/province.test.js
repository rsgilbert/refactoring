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
})
