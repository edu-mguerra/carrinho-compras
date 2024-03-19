import React, {useState, useContext} from "react";
import { BsSearch } from "react-icons/bs";
import './SearchBar.css'
import { fetchProducts } from "../../api/fetchProducts";
import { AppContext } from "../../context/AppContext";

export const SearchBar = () => {
  
  const {setProducts, setLoading} = useContext(AppContext)
  const [searchValue, setSearchValue] = useState('')


  const handleSearch =  async (e)=>{
    e.preventDefault()
    setLoading(true)

    const searchProducts = await fetchProducts(searchValue)

    setProducts(searchProducts)
    setLoading(false)
    setSearchValue('')
  }

  return(
    <form className="search-bar" onSubmit={handleSearch}>
      <input 
        type="search" 
        placeholder="Buscar produtos"
        value={searchValue} 
        className="search--input"
        onChange={({target}) => setSearchValue(target.value)}
        required
      />
      
      <button type="submit" className="search--button">
        <BsSearch />
      </button>
    </form>
  )
}