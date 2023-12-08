/* eslint-disable react/prop-types */
import "./GifList.css";

const GifList = ({ content }) => {
  return (
  <div className='gif'>
    <img className="p-4" src={ content } />
  </div>
  )
}

export default GifList