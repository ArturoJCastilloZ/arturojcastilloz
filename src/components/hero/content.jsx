const Content = (props) => {
  return (
    <div className='hero-content'>
        <div data-aos="zoom-in">
            <p>{props.greeting} </p>
            <p>{props.author}</p>
            <p>{props.presentation}</p>
            <div data-aos="zoom-in" className='hero-content-dir'>
                <ul>
                    <li>{props.mun}</li>
                    <li>{props.cdest}</li>
                </ul>
            </div>
            {props.children}
        </div>
  </div>
  )
}

export {Content}