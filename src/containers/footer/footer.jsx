import '../../styles/components/footer/footer.scss'

const Footer = (props) => {
  const date = new Date();
  const now = date.getFullYear();
  return (
    <div className='footer'>
      <div className='footer-container'>
        <ul>
          {props.children}
        </ul>
        <div className='footer-container-bottom'>
          <span className='line'></span>
          <p>{now} ArturoJCastilloZ, All rights reserved</p>
        </div>
      </div>
    </div>
  )
}

export {Footer}