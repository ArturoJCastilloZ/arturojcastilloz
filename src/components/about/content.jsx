import { images } from "../../mock/images"

const ContentAbout = ({ image, profesion, description }) => {
  const Image = images[image]
  return (
    <div className='about-container'>
        <img data-aos="zoom-in" src={Image} alt={profesion} />
        <div data-aos="zoom-in" className='col-2'>
        <h2>About</h2>
        <span className='line'></span>
        <p>{profesion}</p>
        <p>{description}</p>
        </div>
    </div>
  )
}

export {ContentAbout}