import '../../styles/components/studies/studies.scss'

const Studies = (props) => {
  return (
    <div className='studies' id='studies'>
      <div className='studies-container'>
        <h2 data-aos="zoom-in">Studies</h2>
        <span data-aos="zoom-in" className='line'></span>
        <div data-aos="zoom-in" className='studies-content'>
            {props.children}
        </div>
      </div>
    </div>
  )
}

export {Studies}