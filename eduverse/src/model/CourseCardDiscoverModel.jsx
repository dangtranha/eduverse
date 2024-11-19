export const courseCardDiscoverModel = [
    {
        id: 1,
        title: "Advanced Web Development Masterclass",
        instructor: "John Smith",
        duration: "48 h",
        lectures: 156,
        students: "15.5k",
        price: 89.99,
        description: "Master modern web development with advanced concepts in React, Node.js, and cloud deployment.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3",
        link: "advanced-web-development",
        lessons: [
            { id: 1, title: "Introduction to React", duration: "2 h" },
            { id: 2, title: "State Management with Redux", duration: "3 h" },
            { id: 3, title: "Backend Development with Node.js", duration: "5 h" },
            { id: 4, title: "Deploying with AWS and Docker", duration: "4 h" },
        ],
        outcomes: [
            "Build scalable web applications using React and Node.js.."
        ],
        paymentInfo: {
            description: "By purchasing this course, you will have lifetime access to its content, as well as the right to download it. Are you ready to explore our exciting course now?",
            price: 89.99,
            currency: "USD",
            discount: 10, // in percentage
            paymentMethods: ["Credit Card", "PayPal", "Stripe"]
        }
    },
    {
        id: 2,
        title: "Introduction to Python Programming",
        instructor: "Jane Doe",
        duration: "35 h",
        lectures: 120,
        students: "10.2k",
        price: 49.99,
        description: "Learn Python programming from basics to advanced concepts, including data analysis and web development.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3",
        link: "python-programming",
        lessons: [
            { id: 1, title: "Python Basics", duration: "3 h" },
            { id: 2, title: "Object-Oriented Programming in Python", duration: "4 h" },
            { id: 3, title: "Data Analysis with Pandas", duration: "5 h" },
            { id: 4, title: "Building Web Applications with Flask", duration: "6 h" },
        ],
        outcomes: [
            "Understand the fundamentals of Python programming."
        ],
        paymentInfo: {
            description: "By purchasing this course, you will have lifetime access to its content, as well as the right to download it. Are you ready to explore our exciting course now?",
            price: 49.99,
            currency: "USD",
            discount: 15, // in percentage
            paymentMethods: ["Credit Card", "PayPal", "Google Pay"]
        }
    },
    {
        id: 3,
        title: "Data Science and Machine Learning Bootcamp",
        instructor: "Emily White",
        duration: "60 h",
        lectures: 200,
        students: "8.3k",
        price: 109.99,
        description: "Master data science and machine learning concepts with hands-on projects and real-world datasets.",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3",
        link: "data-science-bootcamp",
        lessons: [
            { id: 1, title: "Introduction to Data Science", duration: "4 h" },
            { id: 2, title: "Data Wrangling with Python", duration: "5 h" },
            { id: 3, title: "Machine Learning Algorithms", duration: "8 h" },
            { id: 4, title: "Deep Learning Basics", duration: "6 h" },
        ],
        outcomes: [
            "Gain expertise in data analysis and visualization."
        ],
        paymentInfo: {
            description: "By purchasing this course, you will have lifetime access to its content, as well as the right to download it. Are you ready to explore our exciting course now?",
            price: 109.99,
            currency: "USD",
            discount: 20, // in percentage
            paymentMethods: ["Credit Card", "PayPal", "Bank Transfer"]
        }
    },
    {
        id: 4,
        title: "Digital Marketing Mastery",
        instructor: "Michael Brown",
        duration: "30 h",
        lectures: 100,
        students: "5.7k",
        price: 39.99,
        description: "Learn digital marketing strategies including SEO, social media, and content marketing to grow any business.",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3",
        link: "digital-marketing-mastery",
        lessons: [
            { id: 1, title: "Introduction to Digital Marketing", duration: "3 h" },
            { id: 2, title: "SEO Strategies", duration: "4 h" },
            { id: 3, title: "Social Media Marketing", duration: "6 h" },
            { id: 4, title: "Content Creation and Marketing", duration: "5 h" },
        ],
        outcomes: [
            "Develop effective digital marketing strategies."
        ],
        paymentInfo: {
            description: "By purchasing this course, ",
            price: 39.99,
            currency: "USD",
            discount: 5, // in percentage
            paymentMethods: ["Credit Card", "PayPal", "Stripe"]
        }
    }
];
