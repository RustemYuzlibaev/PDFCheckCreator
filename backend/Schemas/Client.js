const Item = require('./Item');
const Order = require('./Order');

class Client {
    constructor({ name, phone }) {
        this.name = name;
        this.phone = phone;
    }

    static makeOrder({ id, items, address, name, phone, pointId }) {
        const client = new Client({ name, phone });
        return new Order({ id, items, address, client, pointId });
    }
}

module.exports = Client;
