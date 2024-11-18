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

const CourseDetailView = () => {
    const { courseId } = useParams();

    return (
        <div className="py-8  flex flex-col justify-center items-center ">
            {/* <div className="w-full flex flex-col justify-center items-center  justify-center mb-4">
            </div> */}
            <Routes>

                <Route path="/" element={<Navigate to="" replace />} />
                <Route path="" element={<OverviewController courseId={courseId} />} />
                <Route path="*" element={<div className="p-4">404 Not found overview</div>} />


            </Routes >

        </div >
    );
};

export default CourseDetailView;
