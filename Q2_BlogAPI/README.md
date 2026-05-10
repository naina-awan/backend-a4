# Blog Application API

A RESTful API built with Node.js, Express, and MongoDB for a blogging platform.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcrypt

## Installation

1. Clone the repository
2. Install dependencies:
   npm install
3. Start the server:
   node server.js

## API Endpoints

### Users

- POST /api/users/register - Register new user
- GET /api/users - Get all users
- GET /api/users/:id - Get user by ID with posts

### Posts

- POST /api/posts - Create new post
- GET /api/posts - Get all posts
- GET /api/posts/:id - Get post by ID
- GET /api/posts/tag/:tag - Get posts by tag
- PUT /api/posts/:id - Update post
- DELETE /api/posts/:id - Delete post

### Comments

- POST /api/posts/:postId/comments - Add comment
- GET /api/posts/:postId/comments - Get comments
- DELETE /api/comments/:id - Delete comment

## Sample Request Body

json
{
"title": "Getting Started with REST APIs",
"content": "REST stands for Representational State Transfer...",
"author": "65f1a2b8c9d4e5f6a7b8c9d0",
"tags": ["nodejs", "express", "mongodb"]
}
