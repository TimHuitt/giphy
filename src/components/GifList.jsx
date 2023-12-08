/* eslint-disable react/prop-types */
import "./GifList.css";

const GifList = ({ content }) => {
  return (
  <div className='gif rounded-3'>
    <div className="img-title d-flex justify-content-center align-items-center pt-2">
      <p>{ content.title.trim() }</p>
    </div>

    <img className="p-4 img-fluid" src={ content.images.original.url } />
    { console.log(content.title.trim())}
    
  </div>
  )
}

export default GifList
