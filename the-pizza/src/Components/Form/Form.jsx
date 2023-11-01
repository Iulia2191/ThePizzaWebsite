import './Form.scss'

function Form () {
  return (
  
      <form className='contact-form'>
        <label htmlFor='name'>Name und Nachname:</label>
        <input type='text' placeholder='z.B. Müller Anna' id='name' />
        <label htmlFor='email'>E-Mail-Adresse:</label>
        <input type='email' placeholder='z.B. email@email.com' id='email' />
        <label htmlFor='message'>Ihre Nachricht:</label>
        <textarea id='message'></textarea>
        <button className='btn btn-warning'>Senden</button>
      </form>
  
  )
}

export default Form
