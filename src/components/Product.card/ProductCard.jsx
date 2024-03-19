import './ProductCard.css'
import React, { useContext } from 'react'
import PropTypes from 'prop-types';
import { BsCartCheckFill } from "react-icons/bs";
import { formatCurrenct } from '../../utils/formatCurrency';
import { AppContext } from '../../context/AppContext';
 

export const ProductCard = ({data}) =>{
  const {title, thumbnail, price} = data

  const {cartItems, setCartItems} = useContext(AppContext)

  const handleAddCart = () => {
    setCartItems([...cartItems, data])
  }


  return(
    <section className='product--card'>
      <img 
        src={thumbnail}
        alt='product' 
        className='card--image' 
      />

      <div className='card--infos'>
        <h2 className='card--princ'>{formatCurrenct(price, 'BRL')}</h2>
        <h2 className='card--title'>{title}</h2>
      </div>

      <button 
        type='button' 
        className='button--add-card'
        onClick={handleAddCart}
      ><BsCartCheckFill /></button>
    </section>
  )
}


ProductCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
};