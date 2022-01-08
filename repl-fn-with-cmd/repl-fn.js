// replace function with command

function score(candidate, medicalExam, scoringGuide) {
    let result = 0;
    let healthLevel = 0;
    let highMedicalRiskFlag = false;

    if(medicalExam.isSmoker) {
        healthLevel += 10;
        highMedicalRiskFlag = true;
    }

    let certificationGrade = 'regular'
    if(scoringGuide.low) {
        certificationGrade = 'low'
        result -= 5;
    }

    result -= Math.max(healthLevel - 5, 0)
    return result;
}


class Scorer {
    constructor(candidate, medicalExam, scoringGuide) {
        this.medicalExam = medicalExam;
        this.candidate = candidate;
        this.scoringGuide = scoringGuide;
    }
    execute() {
        // Change all local variables into fields.
        // This moves all function's state to the command object.
        this.result = 0;
        this.healthLevel = 0;
    
        this.scoreSmoking();
        this.scoreScoringGuide();
        this.scoreHealthResult();
        return this.result;
    }    

    scoreSmoking() {
        this.highMedicalRiskFlag = false;
        if(this.medicalExam.isSmoker) {
            this.healthLevel += 10;
            this.highMedicalRiskFlag = true;
        }
    }

    scoreScoringGuide(){
        this.certificationGrade = 'regular'
        if(this.scoringGuide.low) {
            this.certificationGrade = 'low'
            this.result -= 5;
        }
    }

    scoreHealthResult() {
        this.result -= Math.max(this.healthLevel - 5, 0)
    }
}


function ref_score(candidate, medicalExam, scoringGuide) {
    return new Scorer(candidate, medicalExam, scoringGuide).execute();  
}


module.exports = {
    score, ref_score, Scorer
}


