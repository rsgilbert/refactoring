// Documenting ES2015 classes.
// See: https://jsdoc.app/howto-es2015-classes.html

/**
 * Class representing a point.
 */
class Point {
    /**
     * Create a point.
     * @param {number} x - The x value.
     * @param {number} y - The y value.
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;

    }

    /**
     * Get the x value
     */
    getX(){ return this.x; }


    /**
     * Create a {@link Point} from a string
     * @param {string} str - The string of numbers with a comma
     * @return {Point} A point object
     */
    static fromString(str) {

    }
}

const pt = new Point(0)
pt.getX()

let p = Point.fromString('2,3')

console.log('sdf')
