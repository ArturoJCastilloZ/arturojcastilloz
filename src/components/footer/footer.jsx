import React from 'react'
import '../../styles/components/footer/footer.scss'

const Footer = ({footer}) => {
  const date = new Date();
  const now = date.getFullYear();
  return (
    <div className='footer'>
      <div className='footer-container'>
        <ul>
          {footer.map((footer, index) => {
            return (
              <li className='footer-item' key={index}>
                <a href={footer.url}>{footer.icon}</a>
              </li>
            )
          })}
        </ul>
        <div className='footer-container-bottom'>
          <span className='line'></span>
          <p>{now} ArturoJCastilloZ, All rights reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer