import React from "react";
import { Route, Routes } from "react-router-dom";
import ListMyCourseController from "../../controller/MyCourse/ListMyCourseController";
import CourseDetailView from "./CourseDetailView";
function MyCourseView() {

    return (


        <div className="flex w-2/3 p-6 flex flex-col justify-between">
            <Routes>
                <Route path="/" element={<ListMyCourseController />} />

                <Route path=":courseId/*" element={<CourseDetailView />} />

                <Route path="*" element={<div className="p-4">404 Not found overview</div>} />
            </Routes>
        </div>


    );
};
export default MyCourseView;
