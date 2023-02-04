const Social = (props) => {
  return (
    <div className='social' data-aos="zoom-in">
        <div className='social-container'>
            <ul>
                {props.children}
            </ul>
        </div>
    </div>
  )
}

export {Social}