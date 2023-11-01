
import './Testimonials.scss'
import Testimonial from '../Carousel/Carousel'

function Testimonials () {
  return (
    <div className='testimonials text-center pt-5'>
        <h2 className='text-light pb-3'>Was die Leute über uns sagen</h2>
      <div className='container-fluid py-3 px-5'>
        <Testimonial/>
      </div>
    </div>
  )
}

export default Testimonials
