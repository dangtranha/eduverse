import React from 'react';
import Payment from '../../Component/OverviewCourseDiscover/Payment';
import { useParams } from 'react-router-dom';


import { courseCardDiscoverModel } from '../../model/CourseCardDiscoverModel';
import { useNavigate } from 'react-router-dom';

const PaymentController = () => {
    const navigate = useNavigate();

    const { courseId } = useParams();

    const course = courseCardDiscoverModel.find((c) => c.link === courseId);


    if (!course) {
        return <div>Course not found</div>;
    }

    const handlePayment = (course) => {
        navigate(course.link, { state: { course } });
    };

    const handleAddToCart = (courseId) => {
        alert(`Added course with ID ${courseId} to cart.`);
    };



    return (
        <Payment course={course}
            addToCart={handleAddToCart}
            seeMore={handlePayment}
        />
    );
};

export default PaymentController;
