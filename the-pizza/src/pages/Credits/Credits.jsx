import './Credits.scss'

function Credits() {
  return (
    <div className='credits text-center'>
        <div className='credits-title'>
        <h2>Photo Credits</h2>
        </div>
      <div className='credits-text py-5 d-flex justify-content-evenly gap-2  align-content-center'>
        <div className='credits-image '>
            <img src="../img/header1.jpg" alt="Pizza" width='250px' height='250px' />
            <p className='text-light'>Image by <a href="https://www.freepik.com/free-ai-image/freshly-baked-rustic-margherita-pizza-plate-generated-by-ai_43023884.htm">stockgiu</a></p>
        </div>
       <div className='credits-image'>
        <img src="../img/story.jpg" alt="" width='250px' height='250px'  />
       <p className='text-light'>Image by <a href="https://www.freepik.com/free-photo/front-view-baker-spreading-flour-dough-composition_5598221.htm#page=2&query=pizza%20dough&position=14&from_view=search&track=ais">Freepik</a></p>
       </div>
     
      </div>
    </div>
  )
}

export default Credits