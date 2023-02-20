const Content = ({ greeting, author, presentation, mun, cdest, children }) => {
  return (
    <div className='hero-content'>
        <div data-aos="zoom-in">
            <p>{greeting} </p>
            <p>{author}</p>
            <p>{presentation}</p>
            <div data-aos="zoom-in" className='hero-content-dir'>
                <ul>
                    <li>{mun}</li>
                    <li>{cdest}</li>
                </ul>
            </div>
            {children}
        </div>
  </div>
  )
}

export {Content}