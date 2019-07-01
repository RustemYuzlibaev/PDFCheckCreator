const Item = require('./Item');
const Order = require('./Order');

class Client {
    constructor({ name, phone }) {
        this.name = name;
        this.phone = phone;
    }

    makeOrder({ items, address, client }) {
        return new Order({ items, address, client });
    }
}

const client = new Client({ name: 'Rustem', phone: '89191597618' });

const item1 = new Item({ name: 'Pizza', quantity: 3, unitPrice: 450 });
const item2 = new Item({ name: 'Soda', quantity: 2, unitPrice: 120 });

let items = [];
items.push(item1, item2);

const order = client.makeOrder({
    items,
    address: 'city Ufa, st. Lenina 1',
    client: {
        name: client.name,
        phone: client.phone,
    },
});

module.exports = order;
