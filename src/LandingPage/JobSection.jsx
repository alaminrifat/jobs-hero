import React, { useEffect, useState } from "react";
import JobCategory from "./JobCategory";

const JobSection = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
            <div className="mt-28 text-center container mx-auto">
                <h1 className="font-semibold text-3xl">Job Category List</h1>
                <p className="text-gray-500 mt-2">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            
            <div className="flex flex-col ms-4 justify-around  mt-10 sm:flex-row">
                {
                    categories.map(category => <JobCategory category={category} key={category.id}></JobCategory>)
                }
            </div>
        </div>
    );
};

export default JobSection;
