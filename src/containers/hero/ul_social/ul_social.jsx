const UlSocial = ({ children }) => {
  return (
    <div className='social' data-aos="zoom-in">
        <div className='social-container'>
            <ul>
                {children}
            </ul>
        </div>
    </div>
  )
}

export {UlSocial}