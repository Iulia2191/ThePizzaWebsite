import Form from '../../Components/Form/Form'
import Info from '../../Components/Info/Info'
import './Contact.scss'
function Contact () {
  return (
    <>
      <div className='contact'>
        <div className='contact-container'>
          <div className='contact-title'>
            <h2>Kontaktiere uns</h2>
          </div>
          <div className='contact-text'>
            <p className='main-paragraph py-5 text-center h5'>
              Wenn Sie Fragen oder Anregungen haben oder uns einfach eine
              Nachricht hinterlassen möchten, bitten wir Sie, Ihre Informationen
              unten einzutragen.
            </p>
            <p className='main-paragraph py-3 px-5'>Sie finden uns unter:</p>
            <div className='contact-information px-2'>
              <Info/>
              <Form/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
