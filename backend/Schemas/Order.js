class Order {
    constructor({ id, items, address, client, pointId }) {
        this.id = id;
        this.items = items;
        this.price = this.getOrderPrice();
        this.address = address;
        this.client = client;
        this.pointId = pointId;
    }

    getOrderPrice() {
        return this.items.reduce(
            (acc, curr) => acc + curr.quantity * curr.unitPrice,
            0,
        );
    }
}

module.exports = Order;
