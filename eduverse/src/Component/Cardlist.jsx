import React from 'react';

const courses = [
  {
    id: 1,
    category: 'Photography',
    title: 'Create An LMS Website With LearnPress',
    duration: '2 Weeks',
    students: 156,
    level: 'All levels',
    lessons: 20,
    price: 'Free',
    owned: true,
    image: 'https://s3-alpha-sig.figma.com/img/8540/51d7/ae3eac73b9787b3de31a1e1982107835?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EmKL1PB3chBFc9hiS0AwbqKtjnu5zxMDOJmdRcDrBuG5et~JPfOXyq6yImgZqn2GzgoTCLbOKUvKM7TwaoqLQKpph7RBzV0e9zfh-mJUaCZxN8se5B1JJnWasu7BrMwu3YeDs4QMdiefg2ZwQVKJyp1HSUNQ0GnoKGhHC-33J1u8B7ockSpI-He1tp2kXcraAQXMdg8WvLtaHQYuHk32pqW3C6hxgAlGsYtPWPnygAzkVTrXXbrhkkxYdcueBaiTr5lFU3bxuvsCXd0uFwLM7b0AT9Jhag-MXZCsPF-V9hG4DSycsRJ0lxuMHhZlg5~Frc~PFm-zfxy1x7b~DokDGg__',
  },
  {
    id: 2,
    category: 'Photography',
    title: 'Create An LMS Website With LearnPress',
    duration: '2 Weeks',
    students: 156,
    level: 'All levels',
    lessons: 20,
    price: '$29.0',
    owned: false,
    image: 'https://s3-alpha-sig.figma.com/img/7251/7211/7dde41355cd400ba29ea6e176a3a555c?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FjvsHyHaxmxAeUT9TyU634-r4CgXlVdFDeLmY3fbO132CX9ED4YjlcyNDEUXRkL26PE~9w4rD3q2mIztVFXZSwqQ0sjSvHc5XrRwwfDWyzWQXSaOaxns6LHPhZBh8q28NUty5JYeVTA4sl~xVhrOOQHa-2f2B5WXso5eeWSHgTsQh8M4HSg58-5hVXUt3H4WaME-jMMgrppCuVddr0p4gGcDEmxUzHQMjcTOGpkTJFZylwnvk~su3glpB5GRkE5wVcku~e3~MMRlrJL3E1NitnPq5-M9V6hDi7P9~2~LiaNrY~FwERleY~TPIq8-9IYJuIRmENhnN9pvELd0Qano4w__',
  },
  {
    id: 3,
    category: 'Photography',
    title: 'Create An LMS Website With LearnPress',
    duration: '2 Weeks',
    students: 156,
    level: 'All levels',
    lessons: 20,
    price: 'Free',
    owned: false,
    image: 'https://s3-alpha-sig.figma.com/img/1cf7/4737/517fac06dee3d6a68b32799ef8951208?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LzxGIgXY8wVl3tYpKax8qSrTQM1XO6KyfIx~M2r2HeyVNXmkQSc~3PB204JIE3d9xy1rguv00f4oB6CMoITfMiuueN8ea7pHWalrPRlHENq6Q6s4rVWlhsbwpDhUYdQXmrxAgxHM5tU1JvQIJoesh~Mx-dm1fp6xGLS5Sro-zzDC1RTIDQqdc0XN3BxSZAHurLCXl8CconkW5O4G9FQNJdcURvImPXElS6QW1usYuvhx5kB-48luOPaEA7qJoTwVUChRjQlgJOyTLA6S3p01BKHSPPs-f2UrmvFvU1fjOPqXU40Nrhiuieyz0UiZdW0sxOXIwzcCQ~kXyYufPNblJg__',
  },
  {
    id: 4,
    category: 'Photography',
    title: 'Create An LMS Website With LearnPress',
    duration: '2 Weeks',
    students: 156,
    level: 'All levels',
    lessons: 20,
    price: '$29.0',
    owned: false,
    image: 'https://s3-alpha-sig.figma.com/img/9b52/81b1/920d33463b035060e2e22c61499b408f?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PzQZ---kOfIg-d~An6HKgznCFQRPl4Ma2wJtQ7FqMfU1pTaLnRB2HLcQK~oqVJkhFUXC3mfSCDOSIqLzHYTx18Baf8jc8fPuKLG98d3gPytMhgb-We9gv8BuYc9ICxDk6swR0m1uSwZEhAuIAIs8rij6S3VuVTMUDErvF36n-JBzAHUdR36GFIQXCYTWWqCDDa1WPERG~foxqc5gWThmjso3XHJovnYDsPuJRBIDPeL3EMICydQsJuKj9s-ffT7ZKOFyOoaVai7mcryupUsvE11LhnMkp1k-n9SXtdJX7m1ywmO1kPaNMxmoEebs7tKlwFJ0Hq00CaK~OvoognAAHQ__',
  },
];

const CourseList = () => {
  return (
    <div className="max-w-2xl mx-auto py-10">
      <div className="flex flex-col space-y-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden flex">
            <img src={course.image} alt={course.title} className="w-48 h-full object-cover" />
            <div className="p-5 flex-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-600">{course.category}</span>
                <span className="text-sm text-gray-500">{course.duration}</span>
              </div>
              <h3 className="mt-2 text-xl font-semibold text-gray-800">{course.title}</h3>
              <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                <span>{course.students} Students</span>
                <span>|</span>
                <span>{course.level}</span>
                <span>|</span>
                <span>{course.lessons} Lessons</span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                {course.price === 'Free' ? (
                  <span className="bg-green-100 text-green-600 py-1 px-3 rounded-full">
                    {course.owned ? 'Owned' : 'Free'}
                  </span>
                ) : (
                  <span className="text-lg font-semibold">{course.price}</span>
                )}
                <button
                  className={`text-white py-1 px-4 rounded ${
                    course.price === 'Free'
                      ? 'bg-green-500'
                      : 'bg-orange-500 hover:bg-orange-600'
                  }`}
                >
                  {course.price === 'Free' && !course.owned ? 'Add To Cart' : 'View More'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
