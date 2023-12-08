/* eslint-disable react/prop-types */
const GifList = ({ content }) => {
  return (<div className='card'>
    <img src={ content } />
    {content}
    </div>)
}

export default GifList