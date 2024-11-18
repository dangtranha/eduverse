const courseData = [
  {
    "idcourse": 1,
    "iduser": 1,
    "title": "Advanced Web Development Masterclass",
    "instructor": "John Smith",
    "students": 15,
    "price": 89.99,
    "description": "Master modern web development with advanced concepts in React, Node.js, and cloud deployment.",
    "image": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3",
    "link": "advanced-web-development",
    "numlesson": 5,
    "sections": [
      {
        "idsection": 1,
        "idcourse": 1,
        "titlesection": "Introduction to React",
        "elements": [
          {
            "idelement": 1,
            "idsection": 1,
            "titleelement": "What is React?",
            "filepath": "/files/react_intro/what_is_react.pdf"
          },
          {
            "idelement": 2,
            "idsection": 1,
            "titleelement": "Setting up React",
            "filepath": "/files/react_intro/setting_up_react.mp4"
          }
        ]
      },
      {
        "idsection": 2,
        "idcourse": 1,
        "titlesection": "Node.js Backend Development",
        "elements": [
          {
            "idelement": 3,
            "idsection": 2,
            "titleelement": "Introduction to Node.js",
            "filepath": "/files/node_intro/intro_to_node.js"
          },
          {
            "idelement": 4,
            "idsection": 2,
            "titleelement": "Creating an API with Node.js",
            "filepath": "/files/node_api/creating_api_with_node.mp4"
          }
        ]
      },
      {
        "idsection": 3,
        "idcourse": 1,
        "titlesection": "Cloud Deployment with AWS",
        "elements": [
          {
            "idelement": 5,
            "idsection": 3,
            "titleelement": "AWS Basics",
            "filepath": "/files/aws_intro/aws_basics.pdf"
          }
        ]
      }
    ]
  },
  {
    "idcourse": 2,
    "iduser": 2,
    "title": "Full Stack Development Bootcamp",
    "instructor": "Alice Johnson",
    "students": 30,
    "price": 129.99,
    "description": "Learn full stack web development with JavaScript, React, Node.js, Express, and MongoDB.",
    "image": "https://images.unsplash.com/photo-1531491982078-b2099e84bc40?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg2OXwwfDF8c2VhY2h8Nnx8fGZ1bGwtc3RhY2t8ZW58MHx8fHwxNjEyMjg5MzQy&ixlib=rb-1.2.1&q=80&w=1080",
    "link": "python-programming",
    "numlesson": 8,
    "sections": [
      {
        "idsection": 1,
        "idcourse": 2,
        "titlesection": "Frontend Development with React",
        "elements": [
          {
            "idelement": 1,
            "idsection": 1,
            "titleelement": "React Basics",
            "filepath": "/files/react_basics/react_basics.pdf"
          },
          {
            "idelement": 2,
            "idsection": 1,
            "titleelement": "State and Props in React",
            "filepath": "/files/react_basics/state_props_in_react.mp4"
          }
        ]
      },
      {
        "idsection": 2,
        "idcourse": 2,
        "titlesection": "Backend Development with Node.js and Express",
        "elements": [
          {
            "idelement": 3,
            "idsection": 2,
            "titleelement": "Setting up Node.js and Express",
            "filepath": "/files/node_express_setup/setup_node_express.mp4"
          },
          {
            "idelement": 4,
            "idsection": 2,
            "titleelement": "Building REST APIs with Express",
            "filepath": "/files/node_express_api/build_rest_apis_with_express.pdf"
          }
        ]
      },
      {
        "idsection": 3,
        "idcourse": 2,
        "titlesection": "Working with MongoDB",
        "elements": [
          {
            "idelement": 5,
            "idsection": 3,
            "titleelement": "Introduction to MongoDB",
            "filepath": "/files/mongodb_intro/introduction_to_mongodb.pdf"
          },
          {
            "idelement": 6,
            "idsection": 3,
            "titleelement": "CRUD Operations in MongoDB",
            "filepath": "/files/mongodb_crud/crud_operations_mongodb.mp4"
          }
        ]
      },
      {
        "idsection": 4,
        "idcourse": 2,
        "titlesection": "Deploying the Full Stack Application",
        "elements": [
          {
            "idelement": 7,
            "idsection": 4,
            "titleelement": "Deploying on Heroku",
            "filepath": "/files/deployment_heroku/deploy_heroku.pdf"
          }
        ]
      }
    ]
  }
];

export default courseData;
