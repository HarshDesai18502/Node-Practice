const products = [];

module.exports = class product {
    constructor(title,imageUrl,price,description) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
    }

    save() {
        this.id = Date.now();
        products.push(this);
    }

    static fetchAll() {
        return products
    }
}