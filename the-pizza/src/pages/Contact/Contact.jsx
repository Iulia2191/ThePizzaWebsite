

function Contact() {
  return (
    <div className="contact-form-section mx-auto">
      <div className="container">
        <div className="row py-3 contact-form-container">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="container contact-text">
              <h2 className="my-3">Contactează-ne</h2>
              <p className="my-3">Dacă ai întrebări ne găsești datele de contact de mai jos, sau poți să ne lași un mesaj completând formularul.</p>
              <span className="material-symbols-outlined ct-number my-2 mr-4">phone_iphone</span>
              <span className="my-2">+402222222222</span>
              <br />
              <span className="material-symbols-outlined ct-location my-2 mr-4">location_on</span>
              <span className="my-2">Strada Principala, nr. 10, Cluj-Napoca</span>
              <br />
              <span className="material-symbols-outlined ct-email my-2 mr-4">mail</span>
              <span className="my-2">
                <a href="mailto:iboacaniciu@gamial.com" style={{ color: 'black' }}>ibocaniciu@gmail.com</a>
              </span>
              <br />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <form className="contact-form" onSubmit={this.handleSubmit}>
              <input
                className="contact-name my-3"
                type="text"
                placeholder="Numele tău"
                name="userName"
                value={this.state.userName}
                onChange={this.handleInputChange}
              />
              <div id="name-error-message">{this.state.nameErrorMessage}</div>
              <input
                className="contact-email my-3"
                type="email"
                placeholder="Email-ul tău"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
              <div id="email-error-message">{this.state.emailErrorMessage}</div>
              <textarea
                className="contact-message my-3"
                placeholder="Mesajul tău..."
                name="message"
                value={this.state.message}
                onChange={this.handleInputChange}
                rows="4"
              />
              <span id="characterCount">{this.state.characterCount}/20</span>
              <div id="message-error-message">{this.state.messageErrorMessage}</div>
              <button className="btn btn-contact" type="submit">Trimite mesajul</button>
            </form>
          </div>
        </div>
        <div className="message-container">
          <p>Mesajul dumneavoastra a fost inregistrat. Va vom contacta in cel mai scurt timp posibil! 👏</p>
        </div>
      </div>
    </div>
  );
}
}

export default Contact