import { useState } from 'react';
import './Newsletter.scss';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false); 

  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zAZ0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const validateSubscribeEmail = () => {
    if (email.match(validRegex)) {
      setSuccessMessage('Vielen Dank für die Anmeldung. Wir werden uns bald hören! 👏👋');
      setEmail('');
      setFormSubmitted(true); 
    } else {
      setErrorMessage('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validateSubscribeEmail();
  };

  return (
    <div className="newsletter py-3">
      <div className="wrapper">
        {formSubmitted ? (
          <p>{successMessage}</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <p>In die Mailing liste eintragen</p>
            <div className="mail">
              <input
                type="text"
                placeholder="E-Mail-Adresse hier eingeben*"
                id="email"
                autoComplete="on"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="button"
                className="btn btn-warning my-2"
                onClick={handleSubmit}
              >
                Jetzt abbonnieren
              </button>
            </div>
            {errorMessage && <p className="error">{errorMessage}</p>}
          </form>
        )}
      </div>
    </div>
  );
}

export default Newsletter;
