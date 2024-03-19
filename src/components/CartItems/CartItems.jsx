import './CartItems.css'
import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { MdRemoveShoppingCart } from "react-icons/md";
import { formatCurrenct } from '../../utils/formatCurrency';
import { AppContext } from '../../context/AppContext';


export const CartItem = ({data})=>{

  const {cartItems, setCartItems} = useContext(AppContext)
  const { id, thumbnail, title, price} = data

  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item) => item.id !== id)    
    setCartItems(updatedItems)
  }
  return(
    <section className='cart-item'>
      <img 
        src={thumbnail}
        alt='imagem do produto escolhido' 
        className='cart-item-image' 
      />

      <div className='cart-item-content'>
        <h3 className='cart-item-title'>{title}</h3>
        <h3 className='cart-item-price'>{formatCurrenct(price, 'BRL')}</h3>

        <button
          type='button'
          className='button-remove-item'
          onClick={handleRemoveItem}
        >
          <MdRemoveShoppingCart />
        </button>

      </div>
      
    </section>
  )
}

CartItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired, 
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
};