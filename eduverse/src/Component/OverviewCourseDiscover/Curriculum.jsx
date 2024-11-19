import React from 'react';

const Curriculum = ({ lessons }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Curriculum</h2>
            <ul className="space-y-4">
                {lessons.map((lesson) => (
                    <li
                        key={lesson.id}
                        className="flex justify-between items-center border-b pb-4"
                    >
                        {/* Tên bài học */}
                        <span className="text-lg font-medium text-gray-700">
                            {lesson.title}
                        </span>
                        {/* Thời gian */}
                        <span className="text-gray-500 text-sm">{lesson.duration}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Curriculum;
