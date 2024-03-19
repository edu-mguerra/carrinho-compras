import { AppContext } from '../../context/AppContext'
import { formatCurrenct } from '../../utils/formatCurrency'
import { CartItem } from '../CartItems/CartItems'
import './Cart.css'
import React, { useContext } from 'react'

export const Cart = () => {

  const {cartItems, isCartVisible} = useContext(AppContext)

  const totalPrice = cartItems.reduce((acc, item) => {
    return item.price + acc
  }, 0)
  return (
    <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
      <div className='cart-items'>
        {cartItems.map((cartItem)=> <CartItem key={cartItem.id} data={cartItem} />)}
      </div>

      <div className='cart-resume'>{formatCurrenct(totalPrice,  'BRL')}</div>
    </section>
  )
}