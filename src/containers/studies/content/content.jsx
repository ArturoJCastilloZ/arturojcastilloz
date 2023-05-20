const StudiesContent = ({ title, institution, start, end }) => {
  return (
    <div className='studies-content-card'>
        {/* <img src={studies.img} alt={studies.institution} /> */}
        <p style={{ "fontSize": "20px" }}>{title}</p>
        <p><span>{institution}</span></p>
        <p>De {start} a {end}</p>
    </div>
  )
}

export {StudiesContent}