import React from "react";
import { Route, Routes } from "react-router-dom";
import OverviewController from '../../controller/OverviewCourseDiscover/OverviewController';
import CourseCardDiscoverController from "../../controller/CourseCardDiscoverController";
import OverviewCourseView from "./OverviewCourseView";
function DiscoverPageView() {
    return (
        <div className="px-30 flex flex-col w-full max-w-6xl mx-auto p-6">
            <Routes>
                <Route path="/" element={<CourseCardDiscoverController />} />
                <Route path=":courseId/*" element={<OverviewCourseView />} />
                <Route path="*" element={<div className="p-4">404 Not found overview</div>} />
            </Routes>
        </div>
    );
};

export default DiscoverPageView;
