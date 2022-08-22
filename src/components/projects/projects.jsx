import React from 'react';
import '../../styles/components/projects/projects.scss';

const Projects = ({project}) => {
    return (
        <div className='projects'>
            <h1 className='projects-title'>Projects &darr;</h1>
            <div className='projects-cards'>
            {project.map((project, index) => {
                return (
                    <div className='projects-card' key={project.title + index}>
                        <div className='projects-image'>
                            <img src={project.img} alt={project.title} />
                        </div>
                        <div className='projects-details' target="_blank">
                            <a href={project.url}>
                                <p className='projects-details-title'>{project.title}</p>
                            </a>
                            <hr />
                            <p className='projects-details-description'>{project.description}</p>
                        </div>
                    </div>
                )
            })}
            </div>            
        </div>
    );
}

export default Projects;
