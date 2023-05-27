import '../../styles/components/footer/footer.scss'
import { FooterContent } from './content/content';
import { Resume } from '../resume/resume';

const Footer = ({ social, docs }) => {
  const date = new Date();
  const now = date.getFullYear();
  return (
    <div className='footer'>
      <div className='footer-container'>
        <ul>
          {social.map((dataSocial, index) => {
            return (
              <FooterContent
                key={index}
                color={dataSocial.Color}
                icon={dataSocial.Icono}
                url={dataSocial.Url}
                title={dataSocial.Titulo}
              />
            )
          })}
          <Resume />
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