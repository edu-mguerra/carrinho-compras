import React, { useState } from "react";
import PropTypes from 'prop-types';
import { AppContext } from "./AppContext";

export const Provide =({children})=>{
  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [ loading, setLoading] = useState(true)
  const [ isCartVisible,setIsCartVisible ] = useState(false)


  const value = {
    products, 
    setProducts,
    loading,
    setLoading,
    cartItems, 
    setCartItems,
    isCartVisible,
    setIsCartVisible
  }
  return(
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}
Provide.propTypes = {
  children: PropTypes.any
}.isRequired