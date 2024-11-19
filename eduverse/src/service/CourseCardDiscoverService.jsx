import { coursesDiscover } from "../model/CourseCardDiscoverModel";


// Lấy tất cả các khóa học
export const fetchCourses = async () => {

    return Promise.resolve(coursesDiscover);
};

// Thêm khóa học vào giỏ hàng (giả lập)
export const addToCart = (courseId) => {
    console.log(`Course with ID ${courseId} added to cart.`);
    return true;
};

// Xem thông tin chi tiết khóa học
export const viewCourse = (link) => {
    window.location.href = link;
};
