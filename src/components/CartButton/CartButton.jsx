import './CartButton.css'
import React, { useContext } from 'react'
import { BsCart3 } from "react-icons/bs";
import { AppContext } from '../../context/AppContext';

export const CartButton = () => {

  const {cartItems, isCartVisible,setIsCartVisible} = useContext(AppContext)
  const handleVisible = ()=>{
    setIsCartVisible(!isCartVisible)
  }
  return(
    <button 
      type='button' 
      className='cart--button'
      onClick={handleVisible}
    >
      <BsCart3 />
      <span className='cart--status'>{cartItems.length}</span>
    </button>
  )
}