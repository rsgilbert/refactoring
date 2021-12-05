import assert from 'assert'
import chai from 'chai' 

const expect = chai.expect;

describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.strictEqual([1,2,3].indexOf(5), -1)
        })
    })
})

describe('detect', function() {
    it('double done', function(done) {
        // calling done twice is an error
        setImmediate(done)
        // setImmediate(done)
    })
})

describe('use chai', function() {
    it('should be str', function() {
        let foo = 'Jackie'
        expect(foo).to.be.a('string')
        expect(foo).to.equal('Jackie')
        expect(foo.length).to.equal(6)
    })    
})

describe('asynchronous', function() {
    it('has error', function(done) {
        setTimeout(() => {
            // done(Error('bad'))
            // done(0)
        }, 500)
        done('')
    })
})

describe('detect', function() {
    it('double done', function(done) {
        // calling done twice is an error
        setImmediate(done)
        // setImmediate(done)
    })
})
