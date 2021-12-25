const test = require('../test-utils')

// encapsulate collection 
class Person {
    #courses = []
    get courses() { return this.#courses; }
    set courses(courseList) { this.#courses = courseList; }
}


// refactor
class Person2 {
    #courses = []
    get courses() {
        return this.#courses;
    }
    addCourse(){}
    removeCourse(c) {
        
    }
}

/*
1002076623
Imgp@011021
3756io
*/

class Person3 {
    #name;
    #courses;
    constructor(name) {
        this.#name = name;
        this.#courses = []
    }

    get name() { return this.#name; }
    get courses() { return this.#courses.slice(); }
    set courses(aList) { this.#courses = aList; }

    addCourse(aCourse){ this.#courses.push(aCourse); }
    removeCourse(aCourse) {
        const idx = this.#courses.indexOf(aCourse);
        this.#courses.splice(idx, 1);
    }
}

class Course {
    #name;
    #isAdvanced;
    constructor(name, isAdvanced) {
        this.#name = name;
        this.#isAdvanced = isAdvanced;
    }
    get name() {return this.#name; }
    get isAdvanced() { return this.#isAdvanced; }
}

test.skip(function person3CoursesTest() {
    const person3 = new Person3('Jack')
    const courses = [ new Course('TD', false), new Course('CSC', true), new Course('EDU', true) ];
    person3.courses = courses;
    test.testEqual(person3.courses.length, 3)
});

test.skip(function advancedCoursesTest() {
    const person3 = new Person3('Jack')
    const courses = [ new Course('TD', false), new Course('CSC', true), new Course('EDU', true) ];
    person3.courses = courses;
    const advancedCourses = person3.courses.filter(c => c.isAdvanced);
    test.testEqual(advancedCourses.length, 2);
});

// refactor 
test.test(function ref_person3CoursesTest() {
    const person3 = new Person3('Jack')
    const courses = [ new Course('TD', false), new Course('CSC', true), new Course('EDU', true) ];
    courses.forEach(c => person3.addCourse(c));
    test.testEqual(person3.courses.length, 3)
});

test.test(function ref_advancedCoursesTest() {
    const person3 = new Person3('Jack')
    const courses = [ new Course('TD', false), new Course('CSC', true), new Course('EDU', true) ];
    courses.forEach(c => person3.addCourse(c));
    const advancedCourses = person3.courses.filter(c => c.isAdvanced);
    test.testEqual(advancedCourses.length, 2);
});

test.test(function ref_advancedCoursesTest() {
    const person3 = new Person3('Jack')
    const courses = [ new Course('TD', false), new Course('CSC', true), new Course('EDU', true) ];
    courses.forEach(c => person3.addCourse(c));
    const pCourses = person3.courses;
    pCourses.pop();
    pCourses.pop();
    test.testEqual(person3.courses.length, 3);
});