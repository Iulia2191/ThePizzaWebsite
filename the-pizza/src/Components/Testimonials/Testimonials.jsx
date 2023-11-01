
import './Testimonials.scss'
import Testimonial from '../Carousel/Carousel'

function Testimonials () {
  return (
    <div className='testimonials text-center py-5'>
        <h2 className='text-light py-3'>Was die Leute über uns sagen</h2>
      <div className='container-fluid px-5'>
        <Testimonial/>
      </div>
    </div>
  )
}

export default Testimonials
