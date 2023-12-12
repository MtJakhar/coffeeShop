import React from 'react'
import Cart from '../components/Cart';
import Checkout from '../components/Checkout';

export default function page() {
  return (
    <>
      <div>Cart Checkout Page!!!</div>
      <div className='flex'>
        <Cart />
        <Checkout />
      </div>
    </>
  );
}