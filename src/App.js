import React, { Component } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import CartItems from './components/CartItems'
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <CartItems />
        <Footer />
      </div>
    );
  }
}

export default App;
