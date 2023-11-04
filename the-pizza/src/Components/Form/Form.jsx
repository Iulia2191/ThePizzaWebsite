import './Form.scss';
import  { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*$/;

  const validateForm = () => {
    if (
      name.trim() === '' || 
      name.trim().length < 3 || 
      !email.match(validEmailRegex) ||
      message.trim() === '' || 
      message.trim().length < 3 
    ) {
      setErrorMessage('Bitte füllen Sie alle erforderlichen Felder korrekt aus.');
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      setSuccessMessage('Vielen Dank für die Anmeldung. Wir werden uns bald hören! 👏👋');
      setName('');
      setEmail('');
      setMessage('');
      setErrorMessage(''); 
    }
  };

  return (
    <div className='form'>
      <form className='contact-form' onSubmit={handleSubmit}>
        <label htmlFor='name'>Name und Nachname:</label>
        <input
          type='text'
          placeholder='z.B. Müller Anna'
          id='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor='email'>E-Mail-Adresse:</label>
        <input
          type='email'
          placeholder='z.B. email@email.com'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor='message'>Ihre Nachricht:</label>
        <textarea
          id='message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit" className='btn btn-warning'>Senden</button>
      </form>
      {errorMessage && <div className="error-message px-4">{errorMessage}</div>}
      {successMessage && <div className="success-message px-4">{successMessage}</div>}
    </div>
  );
}

export default Form;
