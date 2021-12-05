/**
 * My description
 */
function foo() {

}

/**
 * Represents a book
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string|number} author - The author of the book.
 */
function Book(title, author) {

}

const b = new Book();

// Namepaths

/**
 * @constructor
 */
const Person = function() {
    this.say = function() {
        return 'I am an instance'
    }

    function say() {
        return 'I am inner.'
    }
}

Person.say = function() {
     return 'I am a static function.'
}

/**
 * {@link Person#say} is here as the instance method
 * {@link Person.say} is the static method
 * {@link Person~say} is the inner function.
 * @method
 */
function logPerson() {

}


/**
 * @namespace
 */
var chat = {
    /**
     * Refer to this by {@link chat."#channel"}.
     * @namespace
     */
    "#channel": {
        /**
         * Refer to this by {@link chat."#channel".open}.
         * @type {boolean}
         * @defaultvalue
         */
        open: true,

        /**
         * Internal quotes have to be escaped by backslash. This 
         * is {@link chat."#channel"."say-\"hello\""}.
         */
        'say-"hello"': function msg() {}
    }
    
}

let k = chat["#channel"].open