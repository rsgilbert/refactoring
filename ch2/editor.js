class A {
    drink2() {}
}

class B {
    drink() {

    }
}

let a1 = new A()
let a2 = new A() 
let b1 = new B()
let b2 = new B()

// was able to rename A method to drink2
a1.drink2()
a2.drink2()
b1.drink()
b2.drink()


let C = { 
    a: 5,
    drink5() {
        console.log('chicken', this.a)
    }
}

let D = {
    a: 10
}
Object.setPrototypeOf(D, C)

// Was not able to rename from drink to drink5
D.drink5()

C.drink5()