import { images } from "../../mock/images"

const ContentAbout = (props) => {
  const image = images[props.image]
  return (
    <div className='about-container'>
        <img data-aos="zoom-in" src={image} alt={props.profesion} />
        <div data-aos="zoom-in" className='col-2'>
        <h2>About</h2>
        <span className='line'></span>
        <p>{props.profesion}</p>
        <p>{props.description}</p>
        </div>
    </div>
  )
}

export {ContentAbout}