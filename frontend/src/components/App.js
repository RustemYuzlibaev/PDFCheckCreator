import React, { Component } from 'react';
import './App.sass';

class App extends Component {
    constructor() {
        super();
        this.onOrder = this.onOrder.bind(this);
    }

    onOrder() {
        fetch(`http://localhost:3000/create_checks`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: 123456,
                name: 'Rustem',
                phone: 79191597618,
                address: 'city Ufa, st Lenina 1',
                pointId: 1,
                items: [
                    {
                        name: 'Pizza',
                        quantity: 3,
                        unitPrice: 450,
                    },
                    {
                        name: 'Soda',
                        quantity: 2,
                        unitPrice: 120,
                    },
                ],
            }),
        }).catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <h1>Farfor App</h1>
                <button type="reset" onClick={this.onOrder}>
                    Make order
                </button>
            </div>
        );
    }
}

export default App;
