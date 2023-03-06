const products = [];
let id =1;

const db = require('../utils/database');

module.exports = class product {
    constructor(title,imageUrl,price,description) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
    }

    save() {
        this.id = product.id();
        return db.execute('INSERT INTO Products VALUES(?,?,?,?,?)',[this.id,this.title,this.imageUrl,this.price,this.description]);
    }

    static fetchAll() {
        return db.execute('SELECT * FROM Products');
    }

    static delete(index) {
        products.splice(index,1);
    }

    static findById(id) {
        return db.execute('SELECT * FROM Products WHERE Products.id = ? ',[id]);
    }

    static id() {
        return id++;
    }
}