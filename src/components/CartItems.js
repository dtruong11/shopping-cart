import React from 'react'
import CartItem from './CardItem'
const CartItems = ({cartItemList}) => {
    const lists = cartItemList.map((el) => <CartItem key={el.id} item={el} />)

    return (
    <div className="container">
        <h1>Cart Items</h1>
        <div className="list-group">
          <div className="list-group-item">
            <div className="row">
              <div className="col-md-8">Product</div>
              <div className="col-md-2">Price</div>
              <div className="col-md-2">Quantity</div>
            </div>
          </div>
          {/* Items go here */}
          {lists}
      </div>
    </div>
    )
}

export default CartItems  

