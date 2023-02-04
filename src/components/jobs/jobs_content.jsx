const JobsContent = (props) => {
  return (
    <div className='jobs-items-item' data-aos="zoom-in">
        <div className='jobs-dot'></div>
        <div className='jobs-items-item-date'>{props.date}</div>
        <div className='jobs-content'>
            {/* <img src={jobs.img} alt={jobs.institution} /> */}
            <h3>{props.title}</h3>
            <span>{props.institution}</span>
            <p>{props.activity}</p>
        </div>
    </div>
  )
}

export {JobsContent}