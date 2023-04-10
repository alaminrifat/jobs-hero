import React from 'react';

const JobCategory = ({category}) => {
    return (
        <div className='bg-gray-200 p-4 py-6 w-80 rounded-lg mb-10'>
            <img className='bg-indigo-200 p-2 rounded-lg w-16' src={category.category_image} alt="" />
            <h1 className='font-semibold text-2xl mt-6'>{category.category_name}</h1>
            <p className='text-gray-500 mt-2 mb-2'>{category.jobs_available}</p>
        </div>
    );
};

export default JobCategory;