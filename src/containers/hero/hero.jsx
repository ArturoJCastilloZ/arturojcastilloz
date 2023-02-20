import '../../styles/components/hero/hero.scss'

const Hero = ({ children }) => {
  return (
    <div className='hero' id='home'>
      {children}
    </div>
  )
}

export {Hero}
