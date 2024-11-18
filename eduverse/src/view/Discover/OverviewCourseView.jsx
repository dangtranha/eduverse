import React from 'react';
import NavbarOverviewCourseController from '../../controller/OverviewCourseDiscover/NavbarOverviewCourseController';
import OverviewController from '../../controller/OverviewCourseDiscover/OverviewController';
import PaymentController from '../../controller/OverviewCourseDiscover/PaymentController';
import CurriculumController from '../../controller/OverviewCourseDiscover/CurriculumController';
import ReviewController from '../../controller/OverviewCourseDiscover/ReviewController';
import { Navigate } from "react-router-dom";

import {
    Routes,
    Route,
    useParams
} from "react-router-dom";

const OverviewCourseView = () => {
    const { courseId } = useParams();

    return (
        <div className="min-h-screen flex flex-col items-center">
            {/* Navbar */}
            <div className="w-full flex justify-center mb-4">
                <div className="w-full max-w-4xl px-4">
                    <NavbarOverviewCourseController />
                </div>
            </div>

            {/* Content */}
            <div className="w-full max-w-4xl flex flex-col items-center px-4">
                <Routes>
                    <Route path="/" element={<Navigate to="overview" replace />} />
                    <Route path="overview" element={<OverviewController courseId={courseId} />} />
                    <Route path="curriculum" element={<CurriculumController courseId={courseId} />} />
                    <Route path="review" element={<ReviewController courseId={courseId} />} />
                    <Route path="payment" element={<PaymentController courseId={courseId} />} />
                </Routes>
            </div>
        </div>
    );
};

export default OverviewCourseView;
