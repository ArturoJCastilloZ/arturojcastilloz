const StudiesContent = ({ title, institution, date }) => {
  return (
    <div className='studies-content-card'>
        {/* <img src={studies.img} alt={studies.institution} /> */}
        <p style={{ "fontSize": "25px" }}>{title}</p>
        <p><span>{institution}</span></p>
        <p>{date}</p>
    </div>
  )
}

export {StudiesContent}