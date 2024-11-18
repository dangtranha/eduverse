import React from 'react';
import Overview from '../../Component/OverviewCourseDiscover/Overview';
import { useParams } from 'react-router-dom';
import { courseCardDiscoverModel } from '../../model/CourseCardDiscoverModel';

const OverviewController = () => {
    const { courseId } = useParams();

    const course = courseCardDiscoverModel.find((c) => c.link === courseId);


    if (!course) {
        return <div>Course not found</div>;
    }

    return <Overview course={course} />;
};

export default OverviewController;
