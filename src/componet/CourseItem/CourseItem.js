import React from 'react';

const CourseItem = (props) => {
    
    const { img, count, instructor } = props.course;

    return (
        <div className="flex-1 border border-gray-200 shadow rounded-md p-8">
            <div className="text-center">
                <img className="h-32 bg-white rounded-md inline" src={img} alt="" />
                <p className="text-xl mt-5 mb-3 text-gray-700 font-semibold">{count}</p>
                <p className="text-lg mb-5">{instructor}</p>
            </div>
        </div>
    );
};

export default CourseItem;