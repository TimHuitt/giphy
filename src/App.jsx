/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import { useState, useEffect } from "react";
import GifList from "./components/GifList"
import Search from "./components/SearchBar"

const App = () => {
  const [ gifData, setGifData ] = useState({})
  const [ limit, setLimit ] = useState('50')
  const [ query, setQuery ] = useState('search')

  const handleRequest = async (query) => {
    try {
      const gifURL = `https://api.giphy.com/v1/gifs/search?api_key=j1NX9kwdYBEpPxrd5A51p2Bl6470nFMY&q=${query}&limit=${limit}`
        
      const response = await fetch(gifURL)
      const responseData = await response.json()

      setGifData(responseData.data)
      
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    handleRequest()
  }, [limit, query])


  return (
    <div className="App">
      <Search 
        handleRequest={handleRequest} 
        setLimit={setLimit} 
        query={query}
        setQuery={setQuery}
      />
      <main className="container">
        <div className="row">
          {gifData.length ? (
            gifData.map((item) => (
              <div key={item.id} className="col-md-6 mb-2 d-flex align-items-center justify-content-center">
                <GifList content={item} />
              </div>
            ))
          ) : (
            <p>No Images</p>
          )}
        </div>
      </main>
    </div >
  )
};

export default App;
