import React from 'react';
import Curriculum from '../../Component/OverviewCourseDiscover/Curriculum';
import { useParams } from 'react-router-dom';
import { courseCardDiscoverModel } from '../../model/CourseCardDiscoverModel';

const CurriculumController = () => {
    const { courseId } = useParams();

    // Lấy thông tin khóa học dựa trên courseId
    const course = courseCardDiscoverModel.find((c) => c.link === courseId);

    // Nếu không tìm thấy khóa học
    if (!course) {
        return <div className="text-center text-red-500 font-bold">Course not found</div>;
    }

    return (
        <div className="p-6 bg-gray-100 rounded-md shadow-md">
            {/* Truyền danh sách bài học vào Curriculum View */}
            <Curriculum lessons={course.lessons} />
        </div>
    );
};

export default CurriculumController;
