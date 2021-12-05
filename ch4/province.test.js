// Testing using the Mocha framework

import { Province, sampleProvinceData } from "./province.js"

describe('province', function() {
    it('shortfall', function() {
        const asia = new Province(sampleProvinceData())
        assert.equal(asia.shortfall, 5)
    })
})
