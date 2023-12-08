/* eslint-disable react/prop-types */
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchBar = ({ handleRequest, limit, setLimit, query, setQuery }) => {

  const handleChange = (value) => {
    setQuery(value)
  }
  
  const handleSearch = (e) => {
    e.preventDefault()
    handleRequest(query)
  }

  const handleLimit = (e) => {
    console.log('test')
    setLimit(e)
  }

  const handleRandom = (e) => {
    e.preventDefault()
    console.log('click')
  }
  
  return (
    <>
      <div className="search-bar fixed-top">
        <form
          className="d-flex flex-row align-items-center mt-3 mx-5"
          onSubmit={handleSearch}
        >
          <input
            className="form-control m-2"
            value={query === 'search' ? '' : query}
            placeholder="SEEEEARRRCCCHHH!"
            onChange={(e) => handleChange(e.target.value)}
            required />
          <button
            className="btn btn-secondary inline m-2"
            type="submit">Search!
          </button>
          <button
            className="btn btn-secondary inline m-2"
            type="submit" onClick={(e) => handleRandom(e)}
          >
            Random!
          </button>
        </form>
      </div>

      <div className="fixed-bottom d-flex justify-content-center m-5">
        <form className="search-limit">
          <select value={limit} className="custom-select" onChange={(e) => handleLimit(e.target.value)}>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </form>

      </div>
    </>
  )
}

export default SearchBar