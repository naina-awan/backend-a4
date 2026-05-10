# Student Management System API

A RESTful API built with Node.js, Express, and MongoDB to manage university student records.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## Installation

1. Clone the repository
2. Install dependencies:
   npm install
3. Start the server:
   node server.js

## API Endpoints

### Students

- POST /api/students - Add new student
- GET /api/students - Get all students
- GET /api/students/:id - Get student by ID
- GET /api/students/search?name= - Search by name
- PUT /api/students/:id - Update student
- PATCH /api/students/:id - Partial update
- DELETE /api/students/:id - Delete student
- PATCH /api/students/:id/deactivate - Deactivate student

## Sample Request Body

json
{
"rollNumber": "21-CS-105",
"name": "Ali Hassan",
"email": "ali.hassan@university.edu",
"department": "Computer Science",
"cgpa": 3.78,
"enrollmentYear": 2021
}
