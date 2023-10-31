import "./Newsletter.scss"

function Newsletter () {
  return (
    <div className='newsletter py-5'>
      <div className='wrapper'>
        <p>In die Mailing liste eintragen</p>
        <div className='mail py-5'>
          <input type='text' placeholder='E-Mail-Adresse hier eingeben*' />
          <button type="button" className="btn btn-warning my-2">Jetzt abbonnieren</button>
        </div>
        
      </div>
    </div>
  )
}

export default Newsletter
