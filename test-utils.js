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

    testEqual(expected, present) {
        if(expected === present) {
            console.log('OK')
        }else {
            this.#tempSucceeded = false;
            console.log('Failed. Expected', expected, 'got', present) 
        }
    }

    testTrue(present) {
        if(present === true) {
            console.log('OK')
        }
        else {
            console.log('Failed. Expected true, present is', present)
            this.#tempSucceeded = false;
        } 
    }

    testFalse(present) {
        if(present === false) {
            console.log('OK')
        }
        else {
            console.log('Failed. Expected false, present is', present) 
            this.#tempSucceeded = false;
        }
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