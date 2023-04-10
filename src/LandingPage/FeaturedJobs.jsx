import React from 'react';

const FeaturedJobs = ({job}) => {
    const {job_Title,company,location,salary,job_id,jobType,logo} = job;
    return (
        <div>
            <img className='w-24' src={logo} alt="" />
            <h1 className='text-2xl font-semibold'>{job_Title}</h1>
            <p>{company}</p>
            <p>{jobType}</p>
            <div>
                <p>logo</p>
                <p>{location}</p>
            </div>
            <button>View Details</button>
        </div>
    );
};

export default FeaturedJobs;