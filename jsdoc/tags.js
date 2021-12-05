/**
 * @constructor
 * The shoe
 */
const Shoe = function() {
    /**
     * Wash the shoe
     * @param {number} waterAmount - The amount of water to use
     */
    this.wash = function(waterAmount) {
        console.log('washign shoe')
    }
}


/**
 * Set the shoe's color. Use {@link Shoe#setSize} to set the
 * shoe size.
 * @param {COLORS} color - The shoe's color
 */
Shoe.prototype.setColor = function(color) {
    this.color = color;
}

/**
 * Setft af shoe size. Use {@link Shoe#setColor} to set the color.
 * @param {number} size - The shoe's new size.
 */
Shoe.prototype.setSize = function(size) {
    this.size = size;
}

const sh = new Shoe()
sh.setColor('Red');
sh.setColor('fa')
sh.setSize(5)
sh.wash(5)