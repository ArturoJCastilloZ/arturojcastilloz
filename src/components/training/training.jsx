import React from 'react';
import Jobs from './jobs/jobs';
import Studies from './studies/studies';
import '../../styles/components/training/jobs.scss';
import '../../styles/components/training/studies.scss';

const Training = ({studies, jobs}) => {
    return (
        <section>
            <Jobs jobs={jobs}/>
            <Studies studies={studies}/>
        </section>
    );
}

export default Training;
