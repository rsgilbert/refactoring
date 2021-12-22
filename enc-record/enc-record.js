const organization = { name: 'Apale Organization', country: 'KE' }

// refactor
class Organization {
    /** @type string */
    #name;
    /** @type string */
    #country;

    /**
     * 
     * @param {{ country: string, name: string }} data 
     */
    constructor(data) {
        this.#name = data.name;
        this.#country = data.country;
    }

    get name() { return this.#name; }
    /** @param { string } n - new name */
    set name(n) { this.#name = n; }

    get country() { return this.#country; }
    /** @param { string } c - new country */
    set country(c) { this.#country = c; }
}
const org = new Organization(organization)
console.log(org.name, org.country)