
const { describe, expect, it } = require('@jest/globals')
const { score, ref_score, Scorer } = require('./repl-fn.js')

describe('original', function (){
    it("score 1", function () {
        const medicalExam = { isSmoker: true }
        const scoringGuide = { low: true }
        const candidate = {}
        const sc = score(candidate, medicalExam, scoringGuide)
        expect(sc).toBe(-10)
    });
 
    it("score 2", function () {
        const medicalExam = { isSmoker: false }
        const scoringGuide = { low: true }
        const candidate = {}
        const sc = score(candidate, medicalExam, scoringGuide)
        expect(sc).toBe(-5)
    });
 
    it("score 3", function () {
        const medicalExam = { isSmoker: false }
        const scoringGuide = { low: false }
        const candidate = {}
        const sc = score(candidate, medicalExam, scoringGuide)
        expect(sc).toBe(0)
    });
});



describe('refactor, use command', function (){
    it("ref_score 1", function () {
        const medicalExam = { isSmoker: true }
        const scoringGuide = { low: true }
        const candidate = {}
        const sc = ref_score(candidate, medicalExam, scoringGuide)
        expect(sc).toBe(-10)
    });
 
    it("ref_score 2", function () {
        const medicalExam = { isSmoker: false }
        const scoringGuide = { low: true }
        const candidate = {}
        // construct command
        const scCmd = new Scorer(candidate, medicalExam, scoringGuide);
        expect(scCmd.execute()).toBe(-5)
    });
 
    it("ref_score 3", function () {
        const medicalExam = { isSmoker: false }
        const scoringGuide = { low: false }
        const candidate = {}
        const sc = ref_score(candidate, medicalExam, scoringGuide)
        expect(sc).toBe(0)
    });
});
