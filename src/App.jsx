import "./App.css";
import { useState, useEffect } from "react";
import GifList from "./components/GifList"
import Search from "./components/Search"

const App = () => {
  const [ gifData, setGifData ] = useState({})

  const handleRequest = async (query) => {
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=j1NX9kwdYBEpPxrd5A51p2Bl6470nFMY&q=${query}&limit=20`
      )
      const responseData = await response.json()
      setGifData(responseData.data)
      console.log(responseData.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    handleRequest()
  }, [])


  return (
    <>
      <Search handleRequest={handleRequest} />
      <div>
      {gifData.length ? (
          gifData.map((i) => <GifList key={i.id} content={i.images.original.url} />)
        ) : (
          <p>No numbers yet</p>
        )}
      </div>
    </>
  )
};

export default App;
