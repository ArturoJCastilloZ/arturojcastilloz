import '../../styles/components/about/about.scss';

const About = ({ children }) => {
  return (
    <div className='about' id='about'>
      {children}
    </div>
  )
}

export {About}