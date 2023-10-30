import Card from 'react-bootstrap/Card'
import './Testimonials.css'

function Testimonials () {
  return (
    <div className='testimonials text-center py-3'>
        <h2 className='text-light'>Was die Leute über uns sagen</h2>
      <div className='container-fluid py-3 px-5'>
        <div className='row'>
          <div className='col-12 col-sm-6 col-lg-4'>
            <Card>
              <Card.Header>Zitat</Card.Header>
              <Card.Body>
                <blockquote className='blockquote mb-0'>
                  <p>
                  Exzellente Pizzen - toller Geschmack! 👌🏻
                  </p>
                  <footer className='blockquote-footer'>
                    Marcel M.  <br></br>
                    <cite title='Source Title'>Facebook</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </div>
          <div className='col-12 col-sm-6 col-lg-4'>
            <Card className='card'>
              <Card.Header>Zitat</Card.Header>
              <Card.Body>
                <blockquote className='blockquote mb-0'>
                  <p>
                  So gute Pizza wie in Neapel!
                  </p>
                  <footer className='blockquote-footer'>
                   Bikebase S. <br></br>
                    <cite title='Source Title'>Facebook</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </div>
          <div className='col-12 col-sm-6 col-lg-4'>
            <Card>
              <Card.Header>Zitat</Card.Header>
              <Card.Body>
                <blockquote className='blockquote mb-0'>
                  <p>
                  Sehr gute Pizza. Ich empfehle es! 👍👍👍
                  </p>
                  <footer className='blockquote-footer'>
                    Irina B. <br></br>
                    <cite title='Source Title'>Facebook</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
