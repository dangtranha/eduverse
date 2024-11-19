import React from "react";
import { Route, Routes } from "react-router-dom";
import ListMyCourseController from "../../controller/MyCourse/ListMyCourseController";
import CourseContentController from "../../controller/CourseContentController";

function MyCourseView() {
    return (
        <div className="flex w-p-2 w-full flex-col items-start">
            <Routes>
                <Route path="/" element={<ListMyCourseController />} />
                <Route path=":courseId/*" element={<CourseContentController />} />
                <Route path="*" element={<div className="p-4">404 Not found</div>} />
            </Routes>
        </div>
    );
}

export default MyCourseView;
