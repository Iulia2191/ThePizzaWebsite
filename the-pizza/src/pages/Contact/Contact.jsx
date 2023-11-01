import './Contact.scss'
function Contact () {
  return (
    <>
      <div className='contact'>
        <div className='contact-container'>
          <div className='contact-title'>
            <h2>Kontaktiere uns</h2>
          </div>

          <div className='container-fluid'>
            <p className='main-paragraph pt-5 text-center h5'>
              Wenn Sie Fragen oder Anregungen haben oder uns einfach eine
              Nachricht hinterlassen möchten, bitten wir Sie, Ihre Informationen
              unten einzutragen.
            </p>
            <p className='main-paragraph h5'>Sie finden uns unter:</p>
          </div>
          <div className='contact-wrapper'>
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
                <a href='mailto:office@itschool.ro'>thepizza1@yahoo.com</a>
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
                  <span className='material-icons'> location_on </span>
                  Addrese:
                </p>
                <p className='description'>
                  Bahnhofstraße 24, Parkplatz Ecke Farben Morscher, Ybbs an Der
                  Donau
                </p>
              </li>
            </ul>
            <form className='contact-form'>
              <label htmlFor='name'>Name und Nachname:</label>
              <input type='text' placeholder='z.B. Müller Anna' id='name' />
              <label htmlFor='email'>E-Mail-Adresse:</label>
              <input
                type='email'
                placeholder='z.B. email@email.com'
                id='email'
              />
              <label htmlFor='message'>Ihre Nachricht:</label>
              <textarea id='message'></textarea>
              <button className='btn btn-warning'>Senden</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
