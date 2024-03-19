import { fetchProducts } from '../../api/fetchProducts'
import { ProductCard } from '../Product.card/ProductCard'
import './Products.css'
import  '../../../src/index.css'
import React, { useEffect, useContext}from 'react'
import { Loading } from '../loading/loading'
import { AppContext } from '../../context/AppContext'

export const Products = () => {
  const {products, setProducts, loading, setLoading} = useContext(AppContext)


  useEffect(()=>{
    fetchProducts('iphone')
      .then((response)=>{ //  const response = await fetchProducts('iphone'); No modo await
        setProducts(response)
        setLoading(false)
      })
  }, [])

  return (
    (loading ? <Loading /> : <section className='products container-2 '>  
      {products.map((product) => <ProductCard key={product.id} data={product} />)}
    </section>)
    
  )
}