/* eslint-disable react/prop-types */
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

const SearchBar = ({
  limit, 
  setLimit, 
  query, 
  setQuery 
}) => {
  const [ localQuery, setLocalQuery ] = useState('')
  
  const handleChange = (value) => {
    setLocalQuery(value)
  }
  
  const handleSearch = (e) => {
    e.preventDefault()
    setQuery(localQuery)
  }

  const handleLimit = (e) => {
    console.log('test')
    setLimit(e)
  }

  const handleRandom = async (e) => {
    e.preventDefault()
    const randomURL = `https://random-word-api.herokuapp.com/word`
    const response = await fetch(randomURL)
    const responseData = await response.json()
    setQuery(responseData)
    setLocalQuery(responseData)
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
            value={localQuery}
            placeholder="SEEEEARRRCCCHHH!"
            onChange={(e) => handleChange(e.target.value)}
            required />
          <button
            className="btn btn-secondary inline m-2"
            type="submit">Search!
          </button>
          <button
            className="btn btn-secondary inline m-2"
            type="button" onClick={(e) => handleRandom(e)}
          >
            Random!
          </button>
        </form>
      </div>

      <div className="fixed-bottom d-flex justify-content-center m-5">
        <form className="search-limit">
          <select value={limit ? limit : "50"} className="custom-select" onChange={(e) => handleLimit(e.target.value)}>
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