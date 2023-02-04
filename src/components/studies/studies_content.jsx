const StudiesContent = (props) => {
  return (
    <div className='studies-content-card'>
        {/* <img src={studies.img} alt={studies.institution} /> */}
        <p style={{ "fontSize": "25px" }}>{props.title}</p>
        <p><span>{props.institution}</span></p>
        <p>{props.date}</p>
    </div>
  )
}

export {StudiesContent}