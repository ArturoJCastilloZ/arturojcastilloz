import { FaGithub } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';
import '../../styles/components/projects/projects.scss'

const Projects = ({projects}) => {
  return (
    <div className='projects' id='projects'>
      <div className='projects-container'>
        <h2 data-aos="zoom-in">Projects</h2>
        <span className='line' data-aos="zoom-in"></span>
        <div className='projects-content'>
          {projects.map((projects, index) => {
            return (
              <div className='projects-content-card' data-aos="zoom-in" key={index}>
                <div className='projects-image'>
                  <img src={projects.img} alt={projects.title} />
                </div>
                <h3>{projects.title}</h3>
                <p>{projects.description}</p>
                <div className='projects-btn'>
                  <a href={projects.repo} target="_blank" rel="noreferrer">
                    <button className='button'><FaGithub  /></button>
                  </a>
                  <a href={projects.url} target="_blank" rel="noreferrer">
                    <button className='button'><TbWorld /></button>
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Projects