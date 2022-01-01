# TEST UTILS

This is a small library with a small set of functions for making quick tests 
in your code. 

Unlike test frameworks like jest, this library's methods can be called from within your existing development code. 
This means that you don't have to create separate test files. You can put your tests right next to the code being tested.

Below is an example of usage:
```javascript
test.test(function personTest() {
    const p = new Person({ firstName: 'Mark', lastName: 'Jane' });
    test.testEqual(p.lastName, 'Jane');
    p.lastName = 'Tim'
    test.testNotEqual(p.lastName, 'Tim');
    test.testEqual(p.lastName, 'Jane');
});
test.summarize();
```

The library prides itself for being very small with no use of third party libraries and being very easy to understand and modify.
