const carts = [];

module.exports = class Cart {
    constructor(product) {
        this.product = product;
    }

    static save(product) {
        carts.push(product);
    }

    static fetchAll() {
        return carts
    }

    static delete(index) {
        carts.splice(index,1);
    }
}