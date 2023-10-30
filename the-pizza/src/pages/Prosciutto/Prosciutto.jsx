import './Prosciutto.css'
function Prosciutto () {
  return (
    <div className='prosciutto'>
    
        <div className='prosciutto-title'>
          <h2>Prosciutto Crudo Pizza</h2>
        </div>
        <div className='prosciutto-container'>
        <div className='prosciutto-text'>
          <p>
            Unsere köstliche Prosciutto Crudo Pizza ist eine wahre Gaumenfreude.
            Sie wird auf einem hauchdünnen, knusprigen Teig zubereitet mit
            fluffigem Rand und mit einer fruchtigen Tomatensauce bestrichen.{' '}
          </p>
          <p>
            Großzügige Scheiben von luftgetrocknetem Prosciutto Crudo, frischer
            Fior die Latte Käse und frische Basilikumblätter bilden die
            Belagfüllung. Parmigiano Reggiano, Rucola und Crema di Balsamico
            dürfen nicht fehlen.{' '}
          </p>
          <p>
            In unserem Spezialofen gebacken, vereinen sich die Aromen zu einem
            unvergesslichen Geschmackserlebnis. Ein wahrer Klassiker der
            neapolitanischen Küche. 🌿 🍕 🤤
          </p>
        </div>
        <div className='prosciutto-img d-flex'>
          <img src='../img/prosciutto.jpg' alt='' />
          <img src="../img/pros.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Prosciutto
