class TestUtil {
    #successCount = 0;
    #failCount = 0;
    #skipCount = 0;
    #tempSucceeded = true;

    get totalCount() { 
        return this.#successCount + this.#failCount + this.#skipCount;
    }

    incSuccess() { this.#successCount++;}
    incFail() {this.#failCount++; } 
    incSkip() { this.#skipCount++; }

    summarize() {
       // console.log('***')
        console.log(`Succeeded: ${this.#successCount}, Failed: ${this.#failCount}, Skipped: ${this.#skipCount}`)
    }

    test(fn) {
        console.group(`- ${fn.name}`)
        this.#tempSucceeded = true;
        fn()
        this.#tempSucceeded ? this.incSuccess() : this.incFail();
        console.groupEnd()
    }

    skip(fn) {
        this.incSkip();
        // console.log(`*** SKIP: ${fn.name} ***`)
    }

    testEqual(actual, expected) {
        if(actual === expected) {
            Log.green('OK')
        }else {
            this.#tempSucceeded = false;
            Log.red('Failed. Expected', expected, ', actual is', actual) 
        }
    }

    testNotEqual(actual, notExpected) {
        if(actual !== notExpected) {
            Log.green('OK')
        }else {
            this.#tempSucceeded = false;
            Log.red('Failed. Did not expect', notExpected, ', actual is', actual) 
        }
    }

    testTrue(actual) {
        if(actual === true) {
            Log.green('OK')
        }
        else {
            Log.red('Failed. Expected true , actual is', actual)
            this.#tempSucceeded = false;
        } 
    }

    testFalse(present) {
        if(present === false) {
            console.log('OK')
        }
        else {
            console.log('Failed. Expected false , actual is', actual) 
            this.#tempSucceeded = false;
        }
    }
}

class Log {
    static #resetColor = '\x1b[0m'
    static #redColor = '\x1b[31m';
    static #greenColor = '\x1b[32m';
    static #yellowColor = '\x1b[33m';

    static red(...logs) {
        console.log(Log.#redColor, ...logs, Log.#resetColor)
    }

    static green(...logs) {
        console.log(Log.#greenColor, ...logs, Log.#resetColor)
    }

    static yellow(...logs) {
        console.log(Log.#yellowColor, ...logs, Log.#resetColor)
    }
}

const testUtil = new TestUtil();

function bindProp(propName) {
    testUtil[propName] = testUtil[propName].bind(testUtil)
}

// Bind all methods of the exported class instance object so they can be used independently
bindProp('testEqual')
bindProp('testFalse')
bindProp('testTrue')
bindProp('test')
bindProp('skip')
bindProp('summarize')

module.exports = testUtil;