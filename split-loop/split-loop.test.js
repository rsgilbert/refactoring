// split loop 

const { describe, it, beforeEach, expect } = require("@jest/globals");

function averageAge(people) {
    let averageAge = 0;
    let totalSalary = 0;
    for(const p of people) {
        averageAge += p.age;
        totalSalary += p.salary;
    }
    averageAge = averageAge / people.length;
    return averageAge;
}


describe('original', () => {
    let people;
    beforeEach(() => {
        people = [
            { age: 10, salary: 200 },
            { age: 15, salary: 300 },
            { age: 20, salary: 500 }
        ]
    })
    it.skip('produces average age', () => {
        const avg = averageAge(people);
        expect(avg).toBe(15)
    });
});

// refactor 

function ref_averageAge(people) {
    let totalSalary = 0;
    for(const p of people) {
        totalSalary += p.salary;
    }
    
    let averageAge = 0;
    for(const p of people) {
        averageAge += p.age;
    }
    averageAge = averageAge / people.length;
    return averageAge;
}

describe('refactor', () => {
    let people;
    beforeEach(() => {
        people = [
            { age: 10, salary: 200 },
            { age: 15, salary: 300 },
            { age: 20, salary: 500 }
        ]
    })
    it('produces average age', () => {
        const avg = ref_averageAge(people);
        expect(avg).toBe(15);
    });
});