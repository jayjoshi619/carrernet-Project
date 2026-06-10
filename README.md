# CareerConnect – Job & Internship Portal

## Project Overview
CareerConnect is a web-based Job & Internship Portal developed as part of the ITE5315 course project. The application provides a simple and efficient way for users to browse job opportunities, view job details, and search through a curated dataset of job postings. The project is built using Node.js and Express and uses a JSON dataset as its data source.

## Team Members
* Ashish Anisetti
* Jay Joshi
* Trung Hieu

## Project Features
* View all available job postings
* View detailed information for a specific job by ID
* About page describing the project
* Health/status endpoint for server monitoring
* JSON-based dataset with 330 cleaned job records
* RESTful API structure for future expansion

## Technology Stack
* Node.js
* Express.js
* JavaScript
* JSON
* HTML
* CSS

## Dataset
The project uses a cleaned job postings dataset containing 330 records. The dataset includes information such as job title, company, location, work type, salary, skills, and job description.

## Project Structure
```
careerconnect/
│
├── data/
│   └── jobs.json
├── public/
│   ├── css/
│   └── images/
├── views/
│   ├── index.html
│   ├── about.html
│   └── featured-jobs.html
├── server.js
├── package.json
├── README.md
└── .gitignore
```

## Installation
1. Clone the repository.

2. Install dependencies:
```
npm install
```

3. Start the application:
```
npm start
```

4. Open your browser and navigate to:
```
http://localhost:5500
```

## Available Routes
| Method | Route       | Description                  |
| ------ | ----------- | ---------------------------- |
| GET    | `/`         | Home page                    |
| GET    | `/about`    | About page                   |
| GET    | `/jobs`     | Returns all job postings     |
| GET    | `/jobs/:id` | Returns a specific job by ID |
| GET    | `/health`   | Returns application status   |

## Future Enhancements
* Search and filter jobs
* Pagination support
* Add new job postings (POST)
* Update existing jobs (PUT)
* Delete job postings (DELETE)
* User authentication
* Saved jobs feature
* Company profiles
* Front-end integration with React

## Academic Purpose
This project was developed for educational purposes as part of the ITE5315 coursework and demonstrates REST API development, Express routing, JSON data handling, and project organization.

## Authors
* Ashish Anisetti
* Jay Joshi
* Trung Hieu

## Git-hub Repository Link
https://github.com/jayjoshi619/carrernet-Project.git