/* eslint-disable react/prop-types */
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchBar = ({ handleRequest }) => {
  const [search, setSearch] = useState('')

  const handleChange = (value) => {
    console.log(value)
    setSearch(value)
  }
  
  const handleSearch = (e) => {
    e.preventDefault()
    handleRequest(search)
  }
  
  return (
    <div className="search-bar fixed-top">
      <form 
        className="d-flex flex-row align-items-center mt-3 mx-5" 
        onSubmit={handleSearch}
      >
        <input 
          className="form-control m-2" 
          value={search} 
          placeholder="SEEEEARRRCCCHHH!"
          onChange={(e) => handleChange(e.target.value)}
          required 
        />
        <button 
          className="btn btn-secondary inline m-2" 
          type="submit">Search!
        </button>
      </form>
    </div>
  )
}

export default SearchBar