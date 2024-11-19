import React from 'react';
import NavbarOverviewCourseController from '../../controller/OverviewCourseDiscover/NavbarOverviewCourseController';
import OverviewController from '../../controller/OverviewCourseDiscover/OverviewController';
import PaymentController from '../../controller/OverviewCourseDiscover/PaymentController';
import CurriculumController from '../../controller/OverviewCourseDiscover/CurriculumController';
import ReviewController from '../../controller/OverviewCourseDiscover/ReviewController';
import { Navigate } from "react-router-dom";


import {
    BrowserRouter as Router,
    Routes,
    Route,
    useParams
} from "react-router-dom";

const OverviewCourseView = () => {
    const { courseId } = useParams();

    return (
        <div className="py-8  flex flex-col justify-center items-center ">
            <div className="w-full flex flex-col justify-center items-center  justify-center mb-4">
                <NavbarOverviewCourseController />
            </div>
            <Routes>

                <Route path="/" element={<Navigate to="overview" replace />} />
                <Route path="overview" element={<OverviewController courseId={courseId} />} />
                <Route path="curriculum" element={<CurriculumController courseId={courseId} />} />
                <Route path="review" element={<ReviewController courseId={courseId} />} />
                <Route path="payment" element={<PaymentController courseId={courseId} />} />
            </Routes >

        </div >
    );
};

export default OverviewCourseView;
