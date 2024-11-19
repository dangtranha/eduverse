import React from 'react';
import CourseCardDiscover from '../Component/CourseCardDiscover';
import { courseCardDiscoverModel } from '../model/CourseCardDiscoverModel';
import { useNavigate } from 'react-router-dom';

const CourseCardDiscoverController = () => {
    const navigate = useNavigate();

    const handleLearnMore = (course) => {
        navigate(course.link, { state: { course } });
    };

    const handleAddToCart = (courseId) => {
        alert(`Added course with ID ${courseId} to cart.`);
    };

    return (
        <CourseCardDiscover
            courses={courseCardDiscoverModel}
            addToCart={handleAddToCart}
            seeMore={handleLearnMore}
        />
    );
};

export default CourseCardDiscoverController;
