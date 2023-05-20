const JobsContent = ({ start, end, title, institution, activity }) => {
  return (
    <div className='jobs-items-item' data-aos="zoom-in">
        <div className='jobs-dot'></div>
        <div className='jobs-items-item-date'>{start} - {end}</div>
        <div className='jobs-content'>
            {/* <img src={jobs.img} alt={jobs.institution} /> */}
            <h3>{title}</h3>
            <span>{institution}</span>
            <p>{activity}</p>
        </div>
    </div>
  )
}

export {JobsContent}