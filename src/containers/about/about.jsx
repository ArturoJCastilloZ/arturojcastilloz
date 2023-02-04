import '../../styles/components/about/about.scss';

const About = (props) => {
  return (
    <div className='about' id='about'>
      {props.children}
    </div>
  )
}

export {About}