import { Media } from '../../Components/Media/Media'
import './Gallery.scss'

function Gallery () {
  return (
    <div className='gallery'>
      <div className='gallery-container'>
        <div className='gallery-title'>
        <h2>GALERIE</h2>
        </div>
       
        <div className='media-container px-2'>
          {Media.map((file, index) => (
            <div className='media' key={index}>
              {file.type === 'img' ? (
                <img src={file.url} alt={file.alt} />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gallery
