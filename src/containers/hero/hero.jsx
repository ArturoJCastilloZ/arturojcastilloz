import '../../styles/components/hero/hero.scss'

const Hero = (props) => {
  return (
    <div className='hero' id='home'>
      {props.children}
    </div>
  )
}

export {Hero}
