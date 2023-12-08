import "./App.css";
import { useState, useEffect } from "react";
import GifList from "./components/GifList"
import Search from "./components/SearchBar"

const App = () => {
  const [ gifData, setGifData ] = useState({})

  const handleRequest = async (query) => {
    try {
      const gifURL = query 
        ? `https://api.giphy.com/v1/gifs/search?api_key=j1NX9kwdYBEpPxrd5A51p2Bl6470nFMY&q=${query}&limit=20`
        : `https://api.giphy.com/v1/gifs/search?api_key=j1NX9kwdYBEpPxrd5A51p2Bl6470nFMY&q=search&limit=20`
      
      const response = await fetch(gifURL)
      const responseData = await response.json()

      setGifData(responseData.data)
      
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    handleRequest()
  }, [])


  return (
    <div className="App">
      <Search handleRequest={handleRequest} />
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
