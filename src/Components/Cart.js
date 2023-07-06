import React from 'react';
import handleCart from './redux/reducer/handleCart';

const Cart = () => {
  let cartItems = handleCart.cartItems;
  console.log(cartItems);
  console.log("Haroon");
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>${item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
