import { useState } from 'react'
import { Media } from '../../Components/Media/Media'
import './Gallery.scss'

function Gallery () {
  const [file, setfile] = useState(null)
  
  return (
    <div className='gallery'>
      <div className='gallery-container'>
        <div className='gallery-title'>
          <h2>GALERIE</h2>
        </div>

        <div className='media-container px-2 py-3'>
          {Media.map((file, index) => (
            <div className='media' key={index} onClick={() => setfile(file)}>
              {file.type === 'img' ? (
                <img src={file.url} alt={file.alt} />
              ) : null}
            </div>
          ))}
        </div>
        <div className='popup-media' style={{display: file? 'block' : 'none'}}>
          <span className='remove' onClick={ () => setfile(null)}>&times;</span>

          {file?.type === 'img' ? <img src={file?.url} /> : null}
        </div>
      </div>
    </div>
  )
}

export default Gallery
