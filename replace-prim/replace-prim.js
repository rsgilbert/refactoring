// replace primitive with object
const test = require('../test-utils')


class Order {
    /** @type { Priority } - priority */
    #priority;
    /**
     * 
     * @param { { priority: 'high' | 'rush' | 'low' | Priority } } data - data
     */
    constructor(data){
        this.priority = data.priority;
    }

    
    get priorityString() { return this.priority.toString(); }

    /**
     * @returns { Priority } priority
     */
    get priority() { return this.#priority; }
    set priority(aString) { this.#priority = new Priority(aString); }
}

class Priority {
    value;
    /**
     * 
     * @param {string|Priority} value 
     */
    constructor(value) {
        if(value instanceof Priority) {
            this.value = value.toString()
        }
        this.value = value;
    }
    static legalValues() { return ['low', 'normal', 'high', 'rush'] }
    
    get _index(){
        return Priority.legalValues().findIndex(lv => lv === this.toString())
    }

    higherThan(other){ return this._index > other._index; }
    equals(other) { return this._index === other._index; }
    lowerThan(other) { return this._index < other._index; }
    toString() { return this.value; }
}

const pr = new Priority('high');
console.log(pr)
console.log(pr._index)


test.test(function highPriorityCountTest() {
   
    const orders = [
        new Order({ priority: 'rush' }),
        new Order({ priority: 'low' }),
        new Order({ priority: 'rush' }),
        new Order({ priority: 'high' })
    ];
    const highPriorityCount = orders.filter(o => o.priority.equals(new Priority('high'))
        || o.priority.equals(new Priority('rush')))
        .length;
    test.testEqual(highPriorityCount, 3);
    const highPriorityCount2 = orders.filter(o => o.priority.higherThan(new Priority('normal')))
        .length;
    test.testEqual(highPriorityCount2, 3);
});
