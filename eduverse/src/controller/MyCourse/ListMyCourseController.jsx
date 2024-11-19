import React from 'react';
import { courseCardDiscoverModel } from '../../model/CourseCardDiscoverModel';
import { useNavigate } from 'react-router-dom';
import ListMyCourse from '../../Component/MyCourse/ListMyCourse';

const ListMyCourseController = () => {
    const navigate = useNavigate();

    const handleLearnMore = (course) => {
        navigate(course.link, { state: { course } });
    };

    const handleAddToCart = (courseId) => {
        alert(`Added course with ID ${courseId} to cart.`);
    };

    return (
        <ListMyCourse
            courses={courseCardDiscoverModel}
            addToCart={handleAddToCart}
            seeMore={handleLearnMore}
        />
    );
};

export default ListMyCourseController;
