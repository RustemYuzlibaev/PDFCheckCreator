const uuidv4 = require('uuid/v4');

class Order {
    constructor({ items, address, client }) {
        this.id = uuidv4();
        this.items = items;
        this.price = this.getOrderPrice();
        this.address = address;
        this.client = client;
        this.point_id = 1;
    }

    getOrderPrice() {
        return this.items.reduce(
            (acc, curr) => acc + curr.quantity * curr.unitPrice,
            0,
        );
    }
}

module.exports = Order;
