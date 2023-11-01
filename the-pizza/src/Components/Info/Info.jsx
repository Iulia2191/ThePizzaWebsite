import './Info.scss'

function Info() {
  return (

         <ul>
              <li>
                <p>
                  <span className='material-icons'> phone_iphone </span>
                  Mobil:
                </p>
                <a href='tel:0040737880420'>+43 660 1711525</a>
              </li>
              <li>
                <p>
                  <span className='material-icons'> email </span>
                  E-mail:
                </p>
                <a href='mailto:thepizza1@yahoo.com'>thepizza1@yahoo.com</a>
              </li>
              <li>
                <p>
                  <span className='material-icons'> facebook </span>
                  Facebook:
                </p>
                <a href='https://www.facebook.com/profile.php?id=61552396569253'>
                  /The Pizza
                </a>
              </li>

              <li>
                <p>
                  <span className='material-icons pr-1'> location_on </span>
                  Addrese:
                </p>
                <p className='description'>
                  Bahnhofstraße 24, Parkplatz Ecke Farben Morscher, Ybbs an Der
                  Donau
                </p>
              </li>
            </ul>
        

  )
}

export default Info