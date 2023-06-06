const ContentAbout = ({ image, profesion, description }) => {
  return (
    <div className='about-container'>
        <img data-aos="zoom-in" src={image} alt={profesion} />
        <div data-aos="zoom-in" className='col-2'>
        <h2>Sobre mi</h2>
        <span className='line'></span>
        <p>{profesion}</p>
        <p>{description}</p>
        </div>
    </div>
  )
}

export {ContentAbout}