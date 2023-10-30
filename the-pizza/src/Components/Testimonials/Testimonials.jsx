
import './Testimonials.css'
import Testimonial from '../Carousel/Carousel'

function Testimonials () {
  return (
    <div className='testimonials text-center py-3'>
        <h2 className='text-light'>Was die Leute über uns sagen</h2>
      <div className='container-fluid py-3 px-5'>
        <Testimonial/>
      </div>
    </div>
  )
}

export default Testimonials
