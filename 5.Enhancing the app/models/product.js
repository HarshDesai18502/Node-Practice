const products = [];

module.exports = class product {
    constructor(title,imageUrl) {
        this.title = title;
        this.imageUrl = imageUrl;
    }

    save() {
        products.push(this);
    }

    static fetchAll() {
        return products
    }
}