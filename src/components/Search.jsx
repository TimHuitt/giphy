/* eslint-disable react/prop-types */
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Search = ({ handleRequest }) => {
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
    <form className="d-flex flex-row align-items-center" onSubmit={handleSearch}>
      <input className="form-control m-2" value={search} onChange={(e) => handleChange(e.target.value)} placeholder="SEEEEARRRCCCHHH!" required />
      <button className="btn btn-secondary inline m-2" type="submit">Search!</button>
    </form>
  )
}

export default Search