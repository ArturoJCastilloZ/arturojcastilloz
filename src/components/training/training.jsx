import React from 'react';
import '../../styles/components/training/training.scss';

const Training = ({studies, jobs}) => {
    return (
        <div className='content'>
            <h1 className='studies-title-header'>Studies &darr;</h1>
            <div className='studies'>
                {studies.map((studies, index) => {
                    return (
                        <div className='studies-card' key={studies.title + index}>
                                <p className='studies-card-title'>{studies.title}</p>
                                <hr />
                                <p className='studies-card-career'>{studies.career}</p>
                                <hr />
                                <p className='studies-card-institution'>{studies.institution}</p>
                                <hr />
                                <p className='studies-card-institution'>{studies.date}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
            <h1 className='jobs-title-header'>Experience &darr;</h1>
            <div className='jobs'>
                {jobs.map((jobs, index) => {
                    return (
                        <div className='jobs-card' key={jobs.title + index}>
                                <p className='jobs-card-title'>{jobs.title}</p>
                                <hr />
                                <p className='jobs-card-career'>{jobs.institution}</p>
                                <hr />
                                <p className='jobs-card-institution'>{jobs.date}</p>
                                <hr />
                                <p className='jobs-card-institution'>{jobs.activity}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Training;
