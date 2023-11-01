import { FaFacebook } from 'react-icons/fa'
import './About.scss'
function About () {
  return (
    <div className='about'>
      <div className='about-container'>
        <div className='about-title'>
          <h2>Über Uns</h2>
        </div>
        <div className='about-text'>
          <h5 className='my-4 m text-center'>
            🍕Benvenuti! Beim neuen Geschmackserlebnis in der Stadt! 🎉{' '}
          </h5>
          <h5 className='my-2 mx-2'>
            Original Napolitanishe Pizza in Ybbs an Der Donau
          </h5>
          <p>
            Wir sind ein mobiler Pizzastand und sind gerne auch für Private
            Veranstaltungen und Events buchbar, ihr findet uns außerdem auch auf
            verschiedenen Wochenmärkten und Kirtagen!
          </p>
          <p>
            Wir sind begeistert, euch in unserer gemütlichen Ecke Neapels
            begrüßen zu dürfen, wo die Pizza-Kultur zum Leben erweckt wird. 🌟
          </p>
          <p>
            In unserem Spezialofen wird jede Pizza mit Liebe und Tradition
            gebacken - vom knusprigen Rand bis zur perfekten Tomatensauce. 🍅🔥
          </p>
          <p>
            Lasst uns gemeinsam auf eine kulinarische Reise nach Neapel gehen,
            wo der Duft von frischem Basilikum und Mozzarella in der Luft liegt.
            🌿🧀
          </p>
          <p>
            Wir freuen uns darauf, eure Geschmacksknospen zu verwöhnen und euch
            in unserer neapolitanischen Pizzeria Ecke zu verwöhnen. Kommt vorbei
            und probiert unsere Köstlichkeiten! Buon Appetito!
          </p>
          <p>
            Unsere aktuellen Termine werden stets auf Facebook veröffentlicht.
            Informationen über unseren Standort und unsere Öffnungszeiten finden
            Sie ebenfalls immer auf unserer{' '}
            <a href='https://www.facebook.com/profile.php?id=61552396569253'>
              {' '}
              Facebook-Seite.{' '}
              <span>
                <FaFacebook />
              </span>
            </a>{' '}
          </p>
        </div>
       
      </div>
    </div>
  )
}

export default About
