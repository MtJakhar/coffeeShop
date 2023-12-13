import React from 'react'
import Cart from '../components/Cart';
import Checkout from '../components/Checkout';
import Head from 'next/head';

export default function page() {
  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
      <div>Cart Checkout Page!!!</div>
      <div className='flex'>
        <Cart />
        <Checkout />
      </div>
    </>
  );
}