import React, { Component } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import CartItems from './components/CartItems'
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    let cartItemList = [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ]

    return (
      <div>
        <Header />
        <CartItems cartItemList={cartItemList}/>
        <Footer year= { '2018' }/>
      </div>
    );
  }
}

export default App;
